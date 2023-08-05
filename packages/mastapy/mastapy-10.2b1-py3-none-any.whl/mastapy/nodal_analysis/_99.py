﻿'''_99.py

LoadingStatus
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_LOADING_STATUS = python_net_import('SMT.MastaAPI.NodalAnalysis', 'LoadingStatus')


__docformat__ = 'restructuredtext en'
__all__ = ('LoadingStatus',)


class LoadingStatus(Enum):
    '''LoadingStatus

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _LOADING_STATUS
    __hash__ = None

    UNLOADED = 0
    LOADED = 1
