﻿'''_4140.py

SynchroniserSleevePowerFlow
'''


from mastapy.system_model.part_model.couplings import _2025
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _2204
from mastapy.system_model.analyses_and_results.power_flows import _4139
from mastapy._internal.python_net import python_net_import

_SYNCHRONISER_SLEEVE_POWER_FLOW = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.PowerFlows', 'SynchroniserSleevePowerFlow')


__docformat__ = 'restructuredtext en'
__all__ = ('SynchroniserSleevePowerFlow',)


class SynchroniserSleevePowerFlow(_4139.SynchroniserPartPowerFlow):
    '''SynchroniserSleevePowerFlow

    This is a mastapy class.
    '''

    TYPE = _SYNCHRONISER_SLEEVE_POWER_FLOW
    __hash__ = None

    def __init__(self, instance_to_wrap: 'SynchroniserSleevePowerFlow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2025.SynchroniserSleeve':
        '''SynchroniserSleeve: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2025.SynchroniserSleeve)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_2204.SynchroniserSleeveLoadCase':
        '''SynchroniserSleeveLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2204.SynchroniserSleeveLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None
