﻿'''_1220.py

DynamicsResponseScaling
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_DYNAMICS_RESPONSE_SCALING = python_net_import('SMT.MastaAPI.MathUtility', 'DynamicsResponseScaling')


__docformat__ = 'restructuredtext en'
__all__ = ('DynamicsResponseScaling',)


class DynamicsResponseScaling(Enum):
    '''DynamicsResponseScaling

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _DYNAMICS_RESPONSE_SCALING
    __hash__ = None

    NO_SCALING = 0
    LOG_BASE_10 = 1
    DECIBEL = 2
