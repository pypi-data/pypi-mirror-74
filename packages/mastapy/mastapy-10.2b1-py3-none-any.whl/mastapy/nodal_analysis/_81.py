﻿'''_81.py

DampingScalingTypeForInitialTransients
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_DAMPING_SCALING_TYPE_FOR_INITIAL_TRANSIENTS = python_net_import('SMT.MastaAPI.NodalAnalysis', 'DampingScalingTypeForInitialTransients')


__docformat__ = 'restructuredtext en'
__all__ = ('DampingScalingTypeForInitialTransients',)


class DampingScalingTypeForInitialTransients(Enum):
    '''DampingScalingTypeForInitialTransients

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _DAMPING_SCALING_TYPE_FOR_INITIAL_TRANSIENTS
    __hash__ = None

    NONE = 0
    LINEAR = 1
