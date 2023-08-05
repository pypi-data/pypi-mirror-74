﻿'''_1897.py

UsedForExportingAnImportedFEsSetupOrSubstructuringStepToAnFEFile
'''


from typing import Callable

from mastapy._internal import constructor
from mastapy._internal.implicit import list_with_selected_item
from mastapy.utility.units_and_measurements import _1385
from mastapy import _1
from mastapy._internal.python_net import python_net_import

_USED_FOR_EXPORTING_AN_IMPORTED_FES_SETUP_OR_SUBSTRUCTURING_STEP_TO_AN_FE_FILE = python_net_import('SMT.MastaAPI.SystemModel.ImportedFEs', 'UsedForExportingAnImportedFEsSetupOrSubstructuringStepToAnFEFile')


__docformat__ = 'restructuredtext en'
__all__ = ('UsedForExportingAnImportedFEsSetupOrSubstructuringStepToAnFEFile',)


class UsedForExportingAnImportedFEsSetupOrSubstructuringStepToAnFEFile(_1.APIBase):
    '''UsedForExportingAnImportedFEsSetupOrSubstructuringStepToAnFEFile

    This is a mastapy class.
    '''

    TYPE = _USED_FOR_EXPORTING_AN_IMPORTED_FES_SETUP_OR_SUBSTRUCTURING_STEP_TO_AN_FE_FILE
    __hash__ = None

    def __init__(self, instance_to_wrap: 'UsedForExportingAnImportedFEsSetupOrSubstructuringStepToAnFEFile.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def include_original_fe_file(self) -> 'bool':
        '''bool: 'IncludeOriginalFEFile' is the original name of this property.'''

        return self.wrapped.IncludeOriginalFEFile

    @include_original_fe_file.setter
    def include_original_fe_file(self, value: 'bool'):
        self.wrapped.IncludeOriginalFEFile = bool(value) if value else False

    @property
    def include_rigid_coupling_nodes_and_constraints_added_by_masta(self) -> 'bool':
        '''bool: 'IncludeRigidCouplingNodesAndConstraintsAddedByMASTA' is the original name of this property.'''

        return self.wrapped.IncludeRigidCouplingNodesAndConstraintsAddedByMASTA

    @include_rigid_coupling_nodes_and_constraints_added_by_masta.setter
    def include_rigid_coupling_nodes_and_constraints_added_by_masta(self, value: 'bool'):
        self.wrapped.IncludeRigidCouplingNodesAndConstraintsAddedByMASTA = bool(value) if value else False

    @property
    def include_reduction_commands(self) -> 'bool':
        '''bool: 'IncludeReductionCommands' is the original name of this property.'''

        return self.wrapped.IncludeReductionCommands

    @include_reduction_commands.setter
    def include_reduction_commands(self, value: 'bool'):
        self.wrapped.IncludeReductionCommands = bool(value) if value else False

    @property
    def length_unit(self) -> 'list_with_selected_item.ListWithSelectedItem_Unit':
        '''list_with_selected_item.ListWithSelectedItem_Unit: 'LengthUnit' is the original name of this property.'''

        return constructor.new(list_with_selected_item.ListWithSelectedItem_Unit)(self.wrapped.LengthUnit) if self.wrapped.LengthUnit else None

    @length_unit.setter
    def length_unit(self, value: 'list_with_selected_item.ListWithSelectedItem_Unit.implicit_type()'):
        wrapper_type = list_with_selected_item.ListWithSelectedItem_Unit.TYPE
        enclosed_type = list_with_selected_item.ListWithSelectedItem_Unit.implicit_type()
        value = wrapper_type[enclosed_type](value.wrapped if value else None)
        self.wrapped.LengthUnit = value

    @property
    def force_unit(self) -> 'list_with_selected_item.ListWithSelectedItem_Unit':
        '''list_with_selected_item.ListWithSelectedItem_Unit: 'ForceUnit' is the original name of this property.'''

        return constructor.new(list_with_selected_item.ListWithSelectedItem_Unit)(self.wrapped.ForceUnit) if self.wrapped.ForceUnit else None

    @force_unit.setter
    def force_unit(self, value: 'list_with_selected_item.ListWithSelectedItem_Unit.implicit_type()'):
        wrapper_type = list_with_selected_item.ListWithSelectedItem_Unit.TYPE
        enclosed_type = list_with_selected_item.ListWithSelectedItem_Unit.implicit_type()
        value = wrapper_type[enclosed_type](value.wrapped if value else None)
        self.wrapped.ForceUnit = value

    @property
    def export_to_fe_file(self) -> 'Callable[[], None]':
        '''Callable[[], None]: 'ExportToFEFile' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.ExportToFEFile

    @property
    def export_substructuring_command(self) -> 'Callable[[], None]':
        '''Callable[[], None]: 'ExportSubstructuringCommand' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.ExportSubstructuringCommand
