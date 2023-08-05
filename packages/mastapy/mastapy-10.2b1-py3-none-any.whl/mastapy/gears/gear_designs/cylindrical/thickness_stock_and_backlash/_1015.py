﻿'''_1015.py

FinishStockType
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_FINISH_STOCK_TYPE = python_net_import('SMT.MastaAPI.Gears.GearDesigns.Cylindrical.ThicknessStockAndBacklash', 'FinishStockType')


__docformat__ = 'restructuredtext en'
__all__ = ('FinishStockType',)


class FinishStockType(Enum):
    '''FinishStockType

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _FINISH_STOCK_TYPE
    __hash__ = None

    NONE = 0
    SINGLE_VALUE = 1
    TOLERANCED_VALUE = 2
