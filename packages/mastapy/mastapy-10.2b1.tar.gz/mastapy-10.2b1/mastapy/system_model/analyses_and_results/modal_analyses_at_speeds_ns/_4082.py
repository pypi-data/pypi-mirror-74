﻿'''_4082.py

SpringDamperModalAnalysesAtSpeeds
'''


from mastapy.system_model.part_model.couplings import _2150
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6203
from mastapy.system_model.analyses_and_results.modal_analyses_at_speeds_ns import _4020
from mastapy._internal.python_net import python_net_import

_SPRING_DAMPER_MODAL_ANALYSES_AT_SPEEDS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalysesAtSpeedsNS', 'SpringDamperModalAnalysesAtSpeeds')


__docformat__ = 'restructuredtext en'
__all__ = ('SpringDamperModalAnalysesAtSpeeds',)


class SpringDamperModalAnalysesAtSpeeds(_4020.CouplingModalAnalysesAtSpeeds):
    '''SpringDamperModalAnalysesAtSpeeds

    This is a mastapy class.
    '''

    TYPE = _SPRING_DAMPER_MODAL_ANALYSES_AT_SPEEDS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'SpringDamperModalAnalysesAtSpeeds.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def assembly_design(self) -> '_2150.SpringDamper':
        '''SpringDamper: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2150.SpringDamper)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def assembly_load_case(self) -> '_6203.SpringDamperLoadCase':
        '''SpringDamperLoadCase: 'AssemblyLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6203.SpringDamperLoadCase)(self.wrapped.AssemblyLoadCase) if self.wrapped.AssemblyLoadCase else None
