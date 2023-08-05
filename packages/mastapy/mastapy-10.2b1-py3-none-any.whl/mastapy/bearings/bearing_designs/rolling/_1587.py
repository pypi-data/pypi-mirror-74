﻿'''_1587.py

ThrustBallBearing
'''


from mastapy.bearings import _1478
from mastapy._internal import constructor, conversion
from mastapy._internal.implicit import overridable
from mastapy.bearings.bearing_designs.rolling import _1684
from mastapy._internal.python_net import python_net_import

_THRUST_BALL_BEARING = python_net_import('SMT.MastaAPI.Bearings.BearingDesigns.Rolling', 'ThrustBallBearing')


__docformat__ = 'restructuredtext en'
__all__ = ('ThrustBallBearing',)


class ThrustBallBearing(_1684.BallBearing):
    '''ThrustBallBearing

    This is a mastapy class.
    '''

    TYPE = _THRUST_BALL_BEARING
    __hash__ = None

    def __init__(self, instance_to_wrap: 'ThrustBallBearing.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def outer_ring_mounting(self) -> '_1478.OuterRingMounting':
        '''OuterRingMounting: 'OuterRingMounting' is the original name of this property.'''

        value = conversion.pn_to_mp_enum(self.wrapped.OuterRingMounting)
        return constructor.new(_1478.OuterRingMounting)(value) if value else None

    @outer_ring_mounting.setter
    def outer_ring_mounting(self, value: '_1478.OuterRingMounting'):
        value = value if value else None
        value = conversion.mp_to_pn_enum(value)
        self.wrapped.OuterRingMounting = value

    @property
    def width(self) -> 'float':
        '''float: 'Width' is the original name of this property.'''

        return self.wrapped.Width

    @width.setter
    def width(self, value: 'float'):
        self.wrapped.Width = float(value) if value else 0.0

    @property
    def outer_ring_inner_diameter(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'OuterRingInnerDiameter' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.OuterRingInnerDiameter) if self.wrapped.OuterRingInnerDiameter else None

    @outer_ring_inner_diameter.setter
    def outer_ring_inner_diameter(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.OuterRingInnerDiameter = value

    @property
    def inner_ring_outer_diameter(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'InnerRingOuterDiameter' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.InnerRingOuterDiameter) if self.wrapped.InnerRingOuterDiameter else None

    @inner_ring_outer_diameter.setter
    def inner_ring_outer_diameter(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.InnerRingOuterDiameter = value

    @property
    def sphered_seat_offset(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'SpheredSeatOffset' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.SpheredSeatOffset) if self.wrapped.SpheredSeatOffset else None

    @sphered_seat_offset.setter
    def sphered_seat_offset(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.SpheredSeatOffset = value

    @property
    def sphered_seat_radius(self) -> 'overridable.Overridable_float':
        '''overridable.Overridable_float: 'SpheredSeatRadius' is the original name of this property.'''

        return constructor.new(overridable.Overridable_float)(self.wrapped.SpheredSeatRadius) if self.wrapped.SpheredSeatRadius else None

    @sphered_seat_radius.setter
    def sphered_seat_radius(self, value: 'overridable.Overridable_float.implicit_type()'):
        wrapper_type = overridable.Overridable_float.TYPE
        enclosed_type = overridable.Overridable_float.implicit_type()
        value = wrapper_type[enclosed_type](enclosed_type(value) if value else 0.0)
        self.wrapped.SpheredSeatRadius = value
