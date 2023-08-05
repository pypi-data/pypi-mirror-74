﻿'''_988.py

DIN3967ToleranceSeries
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_DIN3967_TOLERANCE_SERIES = python_net_import('SMT.MastaAPI.Gears.GearDesigns.Cylindrical', 'DIN3967ToleranceSeries')


__docformat__ = 'restructuredtext en'
__all__ = ('DIN3967ToleranceSeries',)


class DIN3967ToleranceSeries(Enum):
    '''DIN3967ToleranceSeries

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _DIN3967_TOLERANCE_SERIES
    __hash__ = None

    _21 = 21
    _22 = 22
    _23 = 23
    _24 = 24
    _25 = 25
    _26 = 26
    _27 = 27
    _28 = 28
    _29 = 29
    _30 = 30
