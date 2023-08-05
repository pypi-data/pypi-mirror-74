﻿'''_1483.py

RollingBearingRaceType
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_ROLLING_BEARING_RACE_TYPE = python_net_import('SMT.MastaAPI.Bearings', 'RollingBearingRaceType')


__docformat__ = 'restructuredtext en'
__all__ = ('RollingBearingRaceType',)


class RollingBearingRaceType(Enum):
    '''RollingBearingRaceType

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _ROLLING_BEARING_RACE_TYPE
    __hash__ = None

    NONE = 0
    DRAWN = 1
    MACHINED = 2
