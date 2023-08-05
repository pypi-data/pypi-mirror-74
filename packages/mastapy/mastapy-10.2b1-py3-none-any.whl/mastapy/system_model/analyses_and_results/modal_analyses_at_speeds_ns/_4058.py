﻿'''_4058.py

OilSealModalAnalysesAtSpeeds
'''


from mastapy.system_model.part_model import _2024
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6173
from mastapy.system_model.analyses_and_results.modal_analyses_at_speeds_ns import _4017
from mastapy._internal.python_net import python_net_import

_OIL_SEAL_MODAL_ANALYSES_AT_SPEEDS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalysesAtSpeedsNS', 'OilSealModalAnalysesAtSpeeds')


__docformat__ = 'restructuredtext en'
__all__ = ('OilSealModalAnalysesAtSpeeds',)


class OilSealModalAnalysesAtSpeeds(_4017.ConnectorModalAnalysesAtSpeeds):
    '''OilSealModalAnalysesAtSpeeds

    This is a mastapy class.
    '''

    TYPE = _OIL_SEAL_MODAL_ANALYSES_AT_SPEEDS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'OilSealModalAnalysesAtSpeeds.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2024.OilSeal':
        '''OilSeal: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2024.OilSeal)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_6173.OilSealLoadCase':
        '''OilSealLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6173.OilSealLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None
