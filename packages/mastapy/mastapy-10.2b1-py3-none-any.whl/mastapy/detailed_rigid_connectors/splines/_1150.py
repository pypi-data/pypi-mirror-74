﻿'''_1150.py

SplineFitClassType
'''


from enum import Enum

from mastapy._internal.python_net import python_net_import

_SPLINE_FIT_CLASS_TYPE = python_net_import('SMT.MastaAPI.DetailedRigidConnectors.Splines', 'SplineFitClassType')


__docformat__ = 'restructuredtext en'
__all__ = ('SplineFitClassType',)


class SplineFitClassType(Enum):
    '''SplineFitClassType

    This is a mastapy class.

    Note:
        This class is an Enum.
    '''

    TYPE = _SPLINE_FIT_CLASS_TYPE
    __hash__ = None

    a = 0
    b = 1
    c = 2
    d = 3
    e = 4
    f = 5
    g = 6
    h = 7
    j = 8
    js = 9
    k = 10
    m = 11
    n = 12
    p = 13
    r = 14
    s = 15
    t = 16
    u = 17
    v = 18
    F = 19
    G = 20
    H = 21
    J = 22
    K = 23
    M = 24
