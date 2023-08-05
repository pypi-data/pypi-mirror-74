﻿'''_4102.py

PulleyPowerFlow
'''


from mastapy.system_model.part_model.couplings import _2026
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _2186
from mastapy.system_model.analyses_and_results.power_flows import _4099
from mastapy._internal.python_net import python_net_import

_PULLEY_POWER_FLOW = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.PowerFlows', 'PulleyPowerFlow')


__docformat__ = 'restructuredtext en'
__all__ = ('PulleyPowerFlow',)


class PulleyPowerFlow(_4099.CouplingHalfPowerFlow):
    '''PulleyPowerFlow

    This is a mastapy class.
    '''

    TYPE = _PULLEY_POWER_FLOW
    __hash__ = None

    def __init__(self, instance_to_wrap: 'PulleyPowerFlow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2026.Pulley':
        '''Pulley: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2026.Pulley)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_2186.PulleyLoadCase':
        '''PulleyLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2186.PulleyLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None
