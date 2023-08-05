﻿'''_577.py

MainProfileReliefEndsAtTheStartOfRootReliefOption
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_MAIN_PROFILE_RELIEF_ENDS_AT_THE_START_OF_ROOT_RELIEF_OPTION = python_net_import('SMT.MastaAPI.Gears.MicroGeometry', 'MainProfileReliefEndsAtTheStartOfRootReliefOption')


__docformat__ = 'restructuredtext en'
__all__ = ('MainProfileReliefEndsAtTheStartOfRootReliefOption',)


class MainProfileReliefEndsAtTheStartOfRootReliefOption(Enum):
    '''MainProfileReliefEndsAtTheStartOfRootReliefOption

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _MAIN_PROFILE_RELIEF_ENDS_AT_THE_START_OF_ROOT_RELIEF_OPTION
    __hash__ = None

    NO = 0
    YES = 1
    ONLY_WHEN_NON_ZERO_ROOT_RELIEF = 2
