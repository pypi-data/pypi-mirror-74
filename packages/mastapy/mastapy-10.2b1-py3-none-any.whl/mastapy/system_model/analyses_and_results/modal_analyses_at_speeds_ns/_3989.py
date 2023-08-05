﻿'''_3989.py

BearingModalAnalysesAtSpeeds
'''


from typing import List

from mastapy.system_model.part_model import _2000
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.static_loads import _6074
from mastapy.system_model.analyses_and_results.modal_analyses_at_speeds_ns import _4017
from mastapy._internal.python_net import python_net_import

_BEARING_MODAL_ANALYSES_AT_SPEEDS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalysesAtSpeedsNS', 'BearingModalAnalysesAtSpeeds')


__docformat__ = 'restructuredtext en'
__all__ = ('BearingModalAnalysesAtSpeeds',)


class BearingModalAnalysesAtSpeeds(_4017.ConnectorModalAnalysesAtSpeeds):
    '''BearingModalAnalysesAtSpeeds

    This is a mastapy class.
    '''

    TYPE = _BEARING_MODAL_ANALYSES_AT_SPEEDS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'BearingModalAnalysesAtSpeeds.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2000.Bearing':
        '''Bearing: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2000.Bearing)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_6074.BearingLoadCase':
        '''BearingLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6074.BearingLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None

    @property
    def planetaries(self) -> 'List[BearingModalAnalysesAtSpeeds]':
        '''List[BearingModalAnalysesAtSpeeds]: 'Planetaries' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Planetaries, constructor.new(BearingModalAnalysesAtSpeeds))
        return value
