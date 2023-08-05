﻿'''_2050.py

YVariableForImportedData
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_Y_VARIABLE_FOR_IMPORTED_DATA = python_net_import('SMT.MastaAPI.SystemModel.PartModel.Gears.SuperchargerRotorSet', 'YVariableForImportedData')


__docformat__ = 'restructuredtext en'
__all__ = ('YVariableForImportedData',)


class YVariableForImportedData(Enum):
    '''YVariableForImportedData

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _Y_VARIABLE_FOR_IMPORTED_DATA
    __hash__ = None

    PRESSURE_RATIO = 0
    BOOST_PRESSURE = 1
