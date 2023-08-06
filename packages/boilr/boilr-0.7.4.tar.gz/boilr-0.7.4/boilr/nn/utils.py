import math
from collections import OrderedDict
from typing import Optional, Union, Iterable, Tuple

import torch
from torch import nn

from boilr.options import get_option

__sentinel = object()


def print_num_params(model: nn.Module, max_depth: Optional[int] = __sentinel):
    """Prints overview of model architecture with number of parameters.

    Optionally, it groups together parameters below a certain depth in the
    module tree. The depth defaults to packagewide options.

    Args:
        model (torch.nn.Module)
        max_depth (int, optional)
    """

    if max_depth is __sentinel:
        max_depth = get_option('model_print_depth')
    assert max_depth is None or isinstance(max_depth, int)

    sep = '.'  # string separator in parameter name
    print("\n--- Trainable parameters:")
    num_params_tot = 0
    num_params_dict = OrderedDict()

    for name, param in model.named_parameters():
        if not param.requires_grad:
            continue

        num_params = param.numel()

        if max_depth is not None:
            split = name.split(sep)
            prefix = sep.join(split[:max_depth])
        else:
            prefix = name
        if prefix not in num_params_dict:
            num_params_dict[prefix] = 0
        num_params_dict[prefix] += num_params
        num_params_tot += num_params
    for n, n_par in num_params_dict.items():
        print("{:8d}  {}".format(n_par, n))
    print("  - Total trainable parameters:", num_params_tot)
    print("---------\n")


def grad_global_norm(parameters: Union[Iterable[torch.Tensor], torch.Tensor],
                     norm_type: Optional[Union[float, int]] = 2) -> float:
    """Compute global norm of the gradients of an iterable of parameters.

    The norm is computed over all gradients together, as if they were
    concatenated into a single vector.

    Args:
        parameters (Iterable[Tensor] or Tensor): an iterable of Tensors or a
            single Tensor
        norm_type (float or int, optional): type of the used p-norm. Can be
            ``'inf'`` for infinity norm.

    Returns:
        Global norm of the parameters' gradients (viewed as a single vector).
    """
    if isinstance(parameters, torch.Tensor):
        parameters = [parameters]
    grads = [p.grad for p in parameters if p.grad is not None]
    return global_norm(grads, norm_type=norm_type)


def global_norm(parameters: Union[Iterable[torch.Tensor], torch.Tensor],
                norm_type: Optional[Union[float, int]] = 2) -> float:
    """Compute global norm of an iterable of parameters.

    The norm is computed over all tensors together, as if they were
    concatenated into a single vector. This code is based on
    torch.nn.utils.clip_grad_norm_().

    Args:
        parameters (Iterable[Tensor] or Tensor): an iterable of Tensors or a
            single Tensor
        norm_type (float or int, optional): type of the used p-norm. Can be
            ``'inf'`` for infinity norm.

    Returns:
        Total norm of the parameters (viewed as a single vector).
    """
    if isinstance(parameters, torch.Tensor):
        parameters = [parameters]
    norm_type = float(norm_type)
    if norm_type == math.inf:
        total_norm = max(p.data.abs().max() for p in parameters)
    else:
        total_norm = 0.
        for p in parameters:
            param_norm = p.data.norm(norm_type)
            total_norm += param_norm.item()**norm_type
        total_norm = total_norm**(1. / norm_type)
    return total_norm


def get_module_device(module: nn.Module) -> torch.device:
    """Returns the module's device.

    This is a simple trick, it is probably not robust.

    Args:
        module (torch.nn.Module)

    Returns:
        device (torch.device)
    """
    return next(module.parameters()).device


def is_conv(module: nn.Module) -> bool:
    """Returns whether the module is a convolutional layer."""
    return isinstance(module, torch.nn.modules.conv._ConvNd)


def is_linear(module: nn.Module) -> bool:
    """Returns whether the module is a linear layer."""
    return isinstance(module, torch.nn.Linear)


def named_leaf_modules(module: nn.Module) -> Iterable[Tuple[str, nn.Module]]:
    """Yields (name, module) pairs that are leaves in the module tree."""

    # Should work under common naming assumptions, but it's not guaranteed
    last_name = ''
    for name, l in reversed(list(module.named_modules())):
        if name not in last_name:
            last_name = name
            yield name, l
