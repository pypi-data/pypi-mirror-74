﻿'''_1651.py

SelfAligningBallBearing
'''


from mastapy._internal.implicit import overridable
from mastapy._internal import constructor
from mastapy.bearings.bearing_designs.rolling import _1685
from mastapy._internal.python_net import python_net_import

_SELF_ALIGNING_BALL_BEARING = python_net_import('SMT.MastaAPI.Bearings.BearingDesigns.Rolling', 'SelfAligningBallBearing')


__docformat__ = 'restructuredtext en'
__all__ = ('SelfAligningBallBearing',)


class SelfAligningBallBearing(_1685.BallBearing):
    '''SelfAligningBallBearing

    This is a mastapy class.
    '''

    TYPE = _SELF_ALIGNING_BALL_BEARING
    __hash__ = None

    def __init__(self, instance_to_wrap: 'SelfAligningBallBearing.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def inner_ring_shoulder_diameter(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'InnerRingShoulderDiameter' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.InnerRingShoulderDiameter) if self.wrapped.InnerRingShoulderDiameter else None

    @inner_ring_shoulder_diameter.setter
    def inner_ring_shoulder_diameter(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.InnerRingShoulderDiameter = value

    @property
    def inner_ring_shoulder_height(self) -> 'float':
        '''float: 'InnerRingShoulderHeight' is the original name of this property.'''

        return self.wrapped.InnerRingShoulderHeight

    @inner_ring_shoulder_height.setter
    def inner_ring_shoulder_height(self, value: 'float'):
        self.wrapped.InnerRingShoulderHeight = float(value) if value else 0.0
