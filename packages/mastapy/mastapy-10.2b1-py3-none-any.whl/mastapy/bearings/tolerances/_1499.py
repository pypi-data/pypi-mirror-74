﻿'''_1499.py

RoundnessSpecificationType
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_ROUNDNESS_SPECIFICATION_TYPE = python_net_import('SMT.MastaAPI.Bearings.Tolerances', 'RoundnessSpecificationType')


__docformat__ = 'restructuredtext en'
__all__ = ('RoundnessSpecificationType',)


class RoundnessSpecificationType(Enum):
    '''RoundnessSpecificationType

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _ROUNDNESS_SPECIFICATION_TYPE
    __hash__ = None

    SINUSOIDAL = 0
    USERSPECIFIED = 1
