import torch
import collections
from functools import partial


def deep_to(input, *args, **kwarg):
    if torch.is_tensor(input):
        return input.to(*args, **kwarg)
    elif isinstance(input, str):
        return input
    elif isinstance(input, collections.Sequence):
        return [deep_to(sample, *args, **kwarg) for sample in input]
    elif isinstance(input, collections.Mapping):
        return {k: deep_to(sample, *args, **kwarg) for k, sample in input.items()}
    elif isinstance(input, torch.nn.Module):
        return input.to(*args, **kwarg)
    else:
        return input


def deep_detach(input):
    if torch.is_tensor(input):
        return input.detach()
    elif isinstance(input, str):
        return input
    elif isinstance(input, collections.Sequence):
        return [deep_detach(sample) for sample in input]
    elif isinstance(input, collections.Mapping):
        return {k: deep_detach(sample) for k, sample in input.items()}
    else:
        return input


def deep_chunk(input, chunks, dim=0):
    partial_deep_chunk = partial(deep_chunk, chunks=chunks, dim=dim)
    if torch.is_tensor(input):
        return torch.chunk(input, chunks, dim=dim)
    if isinstance(input, tuple) and len(input) > 0:
        return list(zip(*map(partial_deep_chunk, input)))
    if isinstance(input, list) and len(input) > 0:
        return list(map(list, zip(*map(partial_deep_chunk, input))))
    if isinstance(input, dict) and len(input) > 0:
        return list(map(type(input), zip(*map(partial_deep_chunk, input.items()))))
    return [input for _ in range(chunks)]


def device_to_str(device):
    if isinstance(device, (list, tuple)):
        return [str(d) for d in device]
    else:
        return str(device)


def inheritors(cls):
    subclasses = set()
    cls_list = [cls]
    while cls_list:
        parent = cls_list.pop()
        for child in parent.__subclasses__():
            if child not in subclasses:
                subclasses.add(child)
                cls_list.append(child)
    return subclasses


class AverageMeter(object):
    """Computes and stores the average by Welford's algorithm"""

    def __init__(self):
        self.reset()

    def reset(self):
        self.average = 0
        self.count = 0

    def update(self, value, n=1):
        self.count += n
        self.average += (value - self.average) / self.count
