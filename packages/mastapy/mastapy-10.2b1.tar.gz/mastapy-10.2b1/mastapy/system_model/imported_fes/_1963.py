﻿'''_1963.py

ImportedFEType
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_IMPORTED_FE_TYPE = python_net_import('SMT.MastaAPI.SystemModel.ImportedFEs', 'ImportedFEType')


__docformat__ = 'restructuredtext en'
__all__ = ('ImportedFEType',)


class ImportedFEType(Enum):
    '''ImportedFEType

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    @classmethod
    def type_(cls):
        return _IMPORTED_FE_TYPE

    __hash__ = None

    FULL_FE_MESH = 0
    EXTERNALLY_REDUCED_FE = 1
    CREATE_SHAFT_MESH = 2
