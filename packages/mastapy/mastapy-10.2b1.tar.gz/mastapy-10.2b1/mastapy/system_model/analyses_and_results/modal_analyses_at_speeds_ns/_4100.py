﻿'''_4100.py

UnbalancedMassModalAnalysesAtSpeeds
'''


from mastapy.system_model.part_model import _2035
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6227
from mastapy.system_model.analyses_and_results.modal_analyses_at_speeds_ns import _4101
from mastapy._internal.python_net import python_net_import

_UNBALANCED_MASS_MODAL_ANALYSES_AT_SPEEDS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalysesAtSpeedsNS', 'UnbalancedMassModalAnalysesAtSpeeds')


__docformat__ = 'restructuredtext en'
__all__ = ('UnbalancedMassModalAnalysesAtSpeeds',)


class UnbalancedMassModalAnalysesAtSpeeds(_4101.VirtualComponentModalAnalysesAtSpeeds):
    '''UnbalancedMassModalAnalysesAtSpeeds

    This is a mastapy class.
    '''

    TYPE = _UNBALANCED_MASS_MODAL_ANALYSES_AT_SPEEDS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'UnbalancedMassModalAnalysesAtSpeeds.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2035.UnbalancedMass':
        '''UnbalancedMass: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2035.UnbalancedMass)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_6227.UnbalancedMassLoadCase':
        '''UnbalancedMassLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6227.UnbalancedMassLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None
