"""
Helper functions for Trainers
"""
import datetime
import logging
import os
import shutil
from typing import Any, Dict, Iterable, Optional, Union, Tuple, Set, List
from collections import Counter

import torch
import torch.distributed as dist
from torch.utils.data import DataLoader, Dataset
from torch.nn.utils import clip_grad_norm_

from allennlp.common.checks import check_for_gpu, ConfigurationError
from allennlp.common.params import Params
from allennlp.common.tqdm import Tqdm
from allennlp.data import Instance, Vocabulary, Batch
from allennlp.data.dataset_readers import DatasetReader
from allennlp.models.archival import CONFIG_NAME
from allennlp.models.model import Model
from allennlp.nn import util as nn_util

logger = logging.getLogger(__name__)


# We want to warn people that tqdm ignores metrics that start with underscores
# exactly once. This variable keeps track of whether we have.
class HasBeenWarned:
    tqdm_ignores_underscores = False


def move_optimizer_to_cuda(optimizer):
    """
    Move the optimizer state to GPU, if necessary.
    After calling, any parameter specific state in the optimizer
    will be located on the same device as the parameter.
    """
    for param_group in optimizer.param_groups:
        for param in param_group["params"]:
            if param.is_cuda:
                param_state = optimizer.state[param]
                for k in param_state.keys():
                    if isinstance(param_state[k], torch.Tensor):
                        param_state[k] = param_state[k].cuda(device=param.get_device())


def get_batch_size(batch: Union[Dict, torch.Tensor]) -> int:
    """
    Returns the size of the batch dimension. Assumes a well-formed batch,
    returns 0 otherwise.
    """
    if isinstance(batch, torch.Tensor):
        return batch.size(0)  # type: ignore
    elif isinstance(batch, Dict):
        return get_batch_size(next(iter(batch.values())))
    else:
        return 0


def time_to_str(timestamp: int) -> str:
    """
    Convert seconds past Epoch to human readable string.
    """
    datetimestamp = datetime.datetime.fromtimestamp(timestamp)
    return "{:04d}-{:02d}-{:02d}-{:02d}-{:02d}-{:02d}".format(
        datetimestamp.year,
        datetimestamp.month,
        datetimestamp.day,
        datetimestamp.hour,
        datetimestamp.minute,
        datetimestamp.second,
    )


def str_to_time(time_str: str) -> datetime.datetime:
    """
    Convert human readable string to datetime.datetime.
    """
    pieces: Any = [int(piece) for piece in time_str.split("-")]
    return datetime.datetime(*pieces)


def read_all_datasets(
    train_data_path: str,
    dataset_reader: DatasetReader,
    validation_dataset_reader: DatasetReader = None,
    validation_data_path: str = None,
    test_data_path: str = None,
) -> Dict[str, Dataset]:
    """
    Reads all datasets (perhaps lazily, if the corresponding dataset readers are lazy) and returns a
    dictionary mapping dataset name ("train", "validation" or "test") to the iterable resulting from
    `reader.read(filename)`.
    """

    logger.info("Reading training data from %s", train_data_path)
    train_data = dataset_reader.read(train_data_path)

    datasets: Dict[str, Dataset] = {"train": train_data}

    validation_dataset_reader = validation_dataset_reader or dataset_reader

    if validation_data_path is not None:
        logger.info("Reading validation data from %s", validation_data_path)
        validation_data = validation_dataset_reader.read(validation_data_path)
        datasets["validation"] = validation_data

    if test_data_path is not None:
        logger.info("Reading test data from %s", test_data_path)
        test_data = validation_dataset_reader.read(test_data_path)
        datasets["test"] = test_data

    return datasets


def datasets_from_params(
    params: Params, train: bool = True, validation: bool = True, test: bool = True
) -> Dict[str, Dataset]:
    """
    Load datasets specified by the config.
    """
    datasets: Dict[str, Dataset] = {}

    train = train and ("train_data_path" in params)
    validation = validation and ("validation_data_path" in params)
    test = test and ("test_data_path" in params)
    if not any((train, validation, test)):
        # Return early so don't unnecessarily initialize the train data reader.
        return datasets

    dataset_reader_params = params.pop("dataset_reader")
    dataset_reader = DatasetReader.from_params(dataset_reader_params)

    if train:
        train_data_path = params.pop("train_data_path")
        logger.info("Reading training data from %s", train_data_path)
        train_data = dataset_reader.read(train_data_path)
        datasets["train"] = train_data

    if not validation and not test:
        # Return early so we don't unnecessarily initialize the validation/test data
        # reader.
        return datasets

    validation_and_test_dataset_reader: DatasetReader = dataset_reader
    validation_dataset_reader_params = params.pop("validation_dataset_reader", None)
    if validation_dataset_reader_params is not None:
        logger.info("Using a separate dataset reader to load validation and test data.")
        validation_and_test_dataset_reader = DatasetReader.from_params(
            validation_dataset_reader_params
        )

    if validation:
        validation_data_path = params.pop("validation_data_path")
        logger.info("Reading validation data from %s", validation_data_path)
        validation_data = validation_and_test_dataset_reader.read(validation_data_path)
        datasets["validation"] = validation_data

    if test:
        test_data_path = params.pop("test_data_path")
        logger.info("Reading test data from %s", test_data_path)
        test_data = validation_and_test_dataset_reader.read(test_data_path)
        datasets["test"] = test_data

    return datasets


def create_serialization_dir(
    params: Params, serialization_dir: str, recover: bool, force: bool
) -> None:
    """
    This function creates the serialization directory if it doesn't exist.  If it already exists
    and is non-empty, then it verifies that we're recovering from a training with an identical configuration.

    # Parameters

    params : `Params`
        A parameter object specifying an AllenNLP Experiment.
    serialization_dir : `str`
        The directory in which to save results and logs.
    recover : `bool`
        If `True`, we will try to recover from an existing serialization directory, and crash if
        the directory doesn't exist, or doesn't match the configuration we're given.
    force : `bool`
        If `True`, we will overwrite the serialization directory if it already exists.
    """
    if recover and force:
        raise ConfigurationError("Illegal arguments: both force and recover are true.")

    if os.path.exists(serialization_dir) and force:
        shutil.rmtree(serialization_dir)

    if os.path.exists(serialization_dir) and os.listdir(serialization_dir):
        if not recover:
            raise ConfigurationError(
                f"Serialization directory ({serialization_dir}) already exists and is "
                f"not empty. Specify --recover to recover from an existing output folder."
            )

        logger.info(f"Recovering from prior training at {serialization_dir}.")

        recovered_config_file = os.path.join(serialization_dir, CONFIG_NAME)
        if not os.path.exists(recovered_config_file):
            raise ConfigurationError(
                "The serialization directory already exists but doesn't "
                "contain a config.json. You probably gave the wrong directory."
            )
        loaded_params = Params.from_file(recovered_config_file)

        # Check whether any of the training configuration differs from the configuration we are
        # resuming.  If so, warn the user that training may fail.
        fail = False
        flat_params = params.as_flat_dict()
        flat_loaded = loaded_params.as_flat_dict()
        for key in flat_params.keys() - flat_loaded.keys():
            logger.error(
                f"Key '{key}' found in training configuration but not in the serialization "
                f"directory we're recovering from."
            )
            fail = True
        for key in flat_loaded.keys() - flat_params.keys():
            logger.error(
                f"Key '{key}' found in the serialization directory we're recovering from "
                f"but not in the training config."
            )
            fail = True
        for key in flat_params.keys():
            if flat_params.get(key) != flat_loaded.get(key):
                logger.error(
                    f"Value for '{key}' in training configuration does not match that the value in "
                    f"the serialization directory we're recovering from: "
                    f"{flat_params[key]} != {flat_loaded[key]}"
                )
                fail = True
        if fail:
            raise ConfigurationError(
                "Training configuration does not match the configuration we're recovering from."
            )
    else:
        if recover:
            raise ConfigurationError(
                f"--recover specified but serialization_dir ({serialization_dir}) "
                "does not exist.  There is nothing to recover from."
            )
        os.makedirs(serialization_dir, exist_ok=True)


def enable_gradient_clipping(model: Model, grad_clipping: Optional[float]) -> None:
    if grad_clipping is not None:
        for parameter in model.parameters():
            if parameter.requires_grad:
                parameter.register_hook(
                    lambda grad: nn_util.clamp_tensor(
                        grad, minimum=-grad_clipping, maximum=grad_clipping
                    )
                )


def rescale_gradients(model: Model, grad_norm: Optional[float] = None) -> Optional[float]:
    """
    Performs gradient rescaling. Is a no-op if gradient rescaling is not enabled.
    """
    if grad_norm:
        parameters_to_clip = [p for p in model.parameters() if p.grad is not None]
        return clip_grad_norm_(parameters_to_clip, grad_norm)
    return None


def get_metrics(
    model: Model,
    total_loss: float,
    total_reg_loss: Optional[float],
    num_batches: int,
    reset: bool = False,
    world_size: int = 1,
    cuda_device: Union[int, torch.device] = torch.device("cpu"),
) -> Dict[str, float]:
    """
    Gets the metrics but sets `"loss"` to
    the total loss divided by the `num_batches` so that
    the `"loss"` metric is "average loss per batch".
    """
    metrics = model.get_metrics(reset=reset)
    metrics["loss"] = float(total_loss / num_batches) if num_batches > 0 else 0.0
    if total_reg_loss is not None:
        metrics["reg_loss"] = float(total_reg_loss / num_batches) if num_batches > 0 else 0.0

    if world_size > 1:
        # In distributed mode, average out all metrics across GPUs
        aggregated_metrics = {}
        for metric_name, metric_val in metrics.items():
            metric_tensor = torch.tensor(metric_val).to(cuda_device)
            dist.all_reduce(metric_tensor, op=dist.ReduceOp.SUM)
            reduced_metric = metric_tensor.item() / world_size
            aggregated_metrics[metric_name] = reduced_metric
        return aggregated_metrics
    else:
        return metrics


def evaluate(
    model: Model, data_loader: DataLoader, cuda_device: int = -1, batch_weight_key: str = None,
) -> Dict[str, Any]:
    """
    # Parameters

    model : `Model`
        The model to evaluate
    data_loader : `DataLoader`
        The `DataLoader` that will iterate over the evaluation data (data loaders already contain
        their data).
    cuda_device : `int`, optional (default=`-1`)
        The cuda device to use for this evaluation.  The model is assumed to already be using this
        device; this parameter is only used for moving the input data to the correct device.
    batch_weight_key : `str`, optional (default=`None`)
        If given, this is a key in the output dictionary for each batch that specifies how to weight
        the loss for that batch.  If this is not given, we use a weight of 1 for every batch.
    """
    check_for_gpu(cuda_device)
    with torch.no_grad():
        model.eval()

        iterator = iter(data_loader)
        logger.info("Iterating over dataset")
        generator_tqdm = Tqdm.tqdm(iterator)

        # Number of batches in instances.
        batch_count = 0
        # Number of batches where the model produces a loss.
        loss_count = 0
        # Cumulative weighted loss
        total_loss = 0.0
        # Cumulative weight across all batches.
        total_weight = 0.0

        for batch in generator_tqdm:
            batch_count += 1
            batch = nn_util.move_to_device(batch, cuda_device)
            output_dict = model(**batch)
            loss = output_dict.get("loss")

            metrics = model.get_metrics()

            if loss is not None:
                loss_count += 1
                if batch_weight_key:
                    weight = output_dict[batch_weight_key].item()
                else:
                    weight = 1.0

                total_weight += weight
                total_loss += loss.item() * weight
                # Report the average loss so far.
                metrics["loss"] = total_loss / total_weight

            if not HasBeenWarned.tqdm_ignores_underscores and any(
                metric_name.startswith("_") for metric_name in metrics
            ):
                logger.warning(
                    'Metrics with names beginning with "_" will '
                    "not be logged to the tqdm progress bar."
                )
                HasBeenWarned.tqdm_ignores_underscores = True
            description = (
                ", ".join(
                    [
                        "%s: %.2f" % (name, value)
                        for name, value in metrics.items()
                        if not name.startswith("_")
                    ]
                )
                + " ||"
            )
            generator_tqdm.set_description(description, refresh=False)

        final_metrics = model.get_metrics(reset=True)
        if loss_count > 0:
            # Sanity check
            if loss_count != batch_count:
                raise RuntimeError(
                    "The model you are trying to evaluate only sometimes " + "produced a loss!"
                )
            final_metrics["loss"] = total_loss / total_weight

        return final_metrics


def description_from_metrics(metrics: Dict[str, float]) -> str:
    if not HasBeenWarned.tqdm_ignores_underscores and any(
        metric_name.startswith("_") for metric_name in metrics
    ):
        logger.warning(
            'Metrics with names beginning with "_" will ' "not be logged to the tqdm progress bar."
        )
        HasBeenWarned.tqdm_ignores_underscores = True
    return (
        ", ".join(
            [
                "%s: %.4f" % (name, value)
                for name, value in metrics.items()
                if not name.startswith("_")
            ]
        )
        + " ||"
    )


def make_vocab_from_params(
    params: Params, serialization_dir: str, print_statistics: bool = False
) -> Vocabulary:
    vocab_params = params.pop("vocabulary", {})
    os.makedirs(serialization_dir, exist_ok=True)
    vocab_dir = os.path.join(serialization_dir, "vocabulary")

    if os.path.isdir(vocab_dir) and os.listdir(vocab_dir) is not None:
        raise ConfigurationError(
            "The 'vocabulary' directory in the provided serialization directory is non-empty"
        )

    datasets_for_vocab_creation: Optional[List[str]] = params.pop(
        "datasets_for_vocab_creation", None
    )
    # Do a quick sanity check here. There's no need to load any datasets if the vocab
    # type is "empty".
    if datasets_for_vocab_creation is None and vocab_params.get("type") in ("empty", "from_files"):
        datasets_for_vocab_creation = []

    datasets: Dict[str, Dataset]
    if datasets_for_vocab_creation is None:
        # If `datasets_for_vocab_creation` was not specified, we'll use all datasets
        # from the config.
        datasets = datasets_from_params(params)
    else:
        for dataset_name in datasets_for_vocab_creation:
            data_path = f"{dataset_name}_data_path"
            if data_path not in params:
                raise ConfigurationError(f"invalid 'datasets_for_vocab_creation' {dataset_name}")
        datasets = datasets_from_params(
            params,
            train=("train" in datasets_for_vocab_creation),
            validation=("validation" in datasets_for_vocab_creation),
            test=("test" in datasets_for_vocab_creation),
        )

    instances: Iterable[Instance] = (
        instance
        for key, dataset in datasets.items()
        if datasets_for_vocab_creation is None or key in datasets_for_vocab_creation
        for instance in dataset
    )

    if print_statistics:
        instances = list(instances)

    vocab = Vocabulary.from_params(vocab_params, instances=instances)

    logger.info(f"writing the vocabulary to {vocab_dir}.")
    vocab.save_to_files(vocab_dir)
    logger.info("done creating vocab")

    if print_statistics:
        dataset = Batch(instances)
        dataset.index_instances(vocab)
        dataset.print_statistics()
        vocab.print_statistics()

    return vocab


def ngrams(
    tensor: torch.LongTensor, ngram_size: int, exclude_indices: Set[int]
) -> Dict[Tuple[int, ...], int]:
    ngram_counts: Dict[Tuple[int, ...], int] = Counter()
    if ngram_size > tensor.size(-1):
        return ngram_counts
    for start_position in range(ngram_size):
        for tensor_slice in tensor[start_position:].split(ngram_size, dim=-1):
            if tensor_slice.size(-1) < ngram_size:
                break
            ngram = tuple(x.item() for x in tensor_slice)
            if any(x in exclude_indices for x in ngram):
                continue
            ngram_counts[ngram] += 1
    return ngram_counts


def get_valid_tokens_mask(tensor: torch.LongTensor, exclude_indices: Set[int]) -> torch.ByteTensor:
    valid_tokens_mask = torch.ones_like(tensor, dtype=torch.bool)
    for index in exclude_indices:
        valid_tokens_mask &= tensor != index
    return valid_tokens_mask
