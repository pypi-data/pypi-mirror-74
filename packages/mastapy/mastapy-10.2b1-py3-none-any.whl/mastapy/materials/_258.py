﻿'''_258.py

LubricantViscosityClassSAE
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_LUBRICANT_VISCOSITY_CLASS_SAE = python_net_import('SMT.MastaAPI.Materials', 'LubricantViscosityClassSAE')


__docformat__ = 'restructuredtext en'
__all__ = ('LubricantViscosityClassSAE',)


class LubricantViscosityClassSAE(Enum):
    '''LubricantViscosityClassSAE

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _LUBRICANT_VISCOSITY_CLASS_SAE
    __hash__ = None

    _0W5W = 0
    _10W = 1
    _15W = 2
    _20 = 3
    _20W = 4
    _25W = 5
    _30 = 6
    _40 = 7
    _50 = 8
    _60 = 9
    _70W = 10
    _75W = 11
    _80 = 12
    _80W = 13
    _85 = 14
    _85W = 15
    _90 = 16
    _110 = 17
    _140 = 18
    _190 = 19
    _250 = 20
