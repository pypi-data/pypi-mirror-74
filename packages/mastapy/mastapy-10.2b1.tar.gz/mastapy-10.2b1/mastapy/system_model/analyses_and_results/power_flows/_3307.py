﻿'''_3307.py

OilSealPowerFlow
'''


from mastapy.system_model.part_model import _2024
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6173
from mastapy.system_model.analyses_and_results.power_flows import _3268
from mastapy._internal.python_net import python_net_import

_OIL_SEAL_POWER_FLOW = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.PowerFlows', 'OilSealPowerFlow')


__docformat__ = 'restructuredtext en'
__all__ = ('OilSealPowerFlow',)


class OilSealPowerFlow(_3268.ConnectorPowerFlow):
    '''OilSealPowerFlow

    This is a mastapy class.
    '''

    TYPE = _OIL_SEAL_POWER_FLOW

    __hash__ = None

    def __init__(self, instance_to_wrap: 'OilSealPowerFlow.TYPE'):
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
