﻿'''_911.py

DesignSpaceSearchBase
'''


from typing import (
    Callable, List, Generic, TypeVar
)

from mastapy.gears.gear_set_pareto_optimiser import (
    _920, _908, _929, _944,
    _909, _941
)
from mastapy._internal import constructor, conversion
from mastapy._internal.implicit import enum_with_selected_value
from mastapy._internal.python_net import python_net_import
from mastapy.math_utility.optimisation import _1007, _1037, _1080
from mastapy import _1
from mastapy.gears.analysis import _345

_DATABASE_WITH_SELECTED_ITEM = python_net_import('SMT.MastaAPI.UtilityGUI.Databases', 'DatabaseWithSelectedItem')
_DESIGN_SPACE_SEARCH_BASE = python_net_import('SMT.MastaAPI.Gears.GearSetParetoOptimiser', 'DesignSpaceSearchBase')


__docformat__ = 'restructuredtext en'
__all__ = ('DesignSpaceSearchBase',)


TAnalysis = TypeVar('TAnalysis', bound='_345.AbstractGearSetAnalysis')
TCandidate = TypeVar('TCandidate', bound='')


class DesignSpaceSearchBase(_1.APIBase, Generic[TAnalysis, TCandidate]):
    '''DesignSpaceSearchBase

    This is a mastapy class.

    Generic Types:
        TAnalysis
        TCandidate
    '''

    TYPE = _DESIGN_SPACE_SEARCH_BASE
    __hash__ = None

    def __init__(self, instance_to_wrap: 'DesignSpaceSearchBase.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def remove_candidates_with(self) -> '_920.LargerOrSmaller':
        '''LargerOrSmaller: 'RemoveCandidatesWith' is the original name of this property.'''

        value = conversion.pn_to_mp_enum(self.wrapped.RemoveCandidatesWith)
        return constructor.new(_920.LargerOrSmaller)(value) if value else None

    @remove_candidates_with.setter
    def remove_candidates_with(self, value: '_920.LargerOrSmaller'):
        value = value if value else None
        value = conversion.mp_to_pn_enum(value)
        self.wrapped.RemoveCandidatesWith = value

    @property
    def add_table_filter(self) -> 'Callable[[], None]':
        '''Callable[[], None]: 'AddTableFilter' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.AddTableFilter

    @property
    def maximum_number_of_candidates_to_display(self) -> 'int':
        '''int: 'MaximumNumberOfCandidatesToDisplay' is the original name of this property.'''

        return self.wrapped.MaximumNumberOfCandidatesToDisplay

    @maximum_number_of_candidates_to_display.setter
    def maximum_number_of_candidates_to_display(self, value: 'int'):
        self.wrapped.MaximumNumberOfCandidatesToDisplay = int(value) if value else 0

    @property
    def number_of_unfiltered_candidates(self) -> 'int':
        '''int: 'NumberOfUnfilteredCandidates' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.NumberOfUnfilteredCandidates

    @property
    def viewing_candidates_selected_in_chart(self) -> 'bool':
        '''bool: 'ViewingCandidatesSelectedInChart' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.ViewingCandidatesSelectedInChart

    @property
    def selected_points(self) -> 'List[int]':
        '''List[int]: 'SelectedPoints' is the original name of this property.'''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.SelectedPoints, int)
        return value

    @selected_points.setter
    def selected_points(self, value: 'List[int]'):
        value = value if value else None
        value = conversion.mp_to_pn_objects_in_list(value)
        self.wrapped.SelectedPoints = value

    @property
    def reporting_string_for_too_many_candidates_to_be_evaluated(self) -> 'str':
        '''str: 'ReportingStringForTooManyCandidatesToBeEvaluated' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.ReportingStringForTooManyCandidatesToBeEvaluated

    @property
    def total_number_of_candidates_to_be_evaluated(self) -> 'int':
        '''int: 'TotalNumberOfCandidatesToBeEvaluated' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.TotalNumberOfCandidatesToBeEvaluated

    @property
    def number_of_feasible_candidates(self) -> 'int':
        '''int: 'NumberOfFeasibleCandidates' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.NumberOfFeasibleCandidates

    @property
    def number_of_candidates_after_filtering(self) -> 'int':
        '''int: 'NumberOfCandidatesAfterFiltering' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.NumberOfCandidatesAfterFiltering

    @property
    def number_of_dominant_candidates(self) -> 'int':
        '''int: 'NumberOfDominantCandidates' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.NumberOfDominantCandidates

    @property
    def display_candidates(self) -> 'enum_with_selected_value.EnumWithSelectedValue_CandidateDisplayChoice':
        '''enum_with_selected_value.EnumWithSelectedValue_CandidateDisplayChoice: 'DisplayCandidates' is the original name of this property.'''

        return constructor.new(enum_with_selected_value.EnumWithSelectedValue_CandidateDisplayChoice)(self.wrapped.DisplayCandidates) if self.wrapped.DisplayCandidates else None

    @display_candidates.setter
    def display_candidates(self, value: 'enum_with_selected_value.EnumWithSelectedValue_CandidateDisplayChoice.implicit_type()'):
        wrapper_type = enum_with_selected_value.EnumWithSelectedValue_CandidateDisplayChoice.TYPE
        enclosed_type = enum_with_selected_value.EnumWithSelectedValue_CandidateDisplayChoice.implicit_type()
        value = wrapper_type[enclosed_type](value if value else None)
        self.wrapped.DisplayCandidates = value

    @property
    def design_space_search_strategy_database(self) -> 'str':
        '''str: 'DesignSpaceSearchStrategyDatabase' is the original name of this property.'''

        return self.wrapped.DesignSpaceSearchStrategyDatabase.SelectedItemName

    @design_space_search_strategy_database.setter
    def design_space_search_strategy_database(self, value: 'str'):
        self.wrapped.DesignSpaceSearchStrategyDatabase.SetSelectedItem(str(value) if value else None)

    @property
    def design_space_search_strategy_database_duty_cycle(self) -> 'str':
        '''str: 'DesignSpaceSearchStrategyDatabaseDutyCycle' is the original name of this property.'''

        return self.wrapped.DesignSpaceSearchStrategyDatabaseDutyCycle.SelectedItemName

    @design_space_search_strategy_database_duty_cycle.setter
    def design_space_search_strategy_database_duty_cycle(self, value: 'str'):
        self.wrapped.DesignSpaceSearchStrategyDatabaseDutyCycle.SetSelectedItem(str(value) if value else None)

    @property
    def save_strategy(self) -> 'Callable[[], None]':
        '''Callable[[], None]: 'SaveStrategy' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.SaveStrategy

    @property
    def load_strategy(self) -> 'Callable[[], None]':
        '''Callable[[], None]: 'LoadStrategy' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.LoadStrategy

    @property
    def number_of_unrateable_designs(self) -> 'int':
        '''int: 'NumberOfUnrateableDesigns' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.NumberOfUnrateableDesigns

    @property
    def filter_candidates(self) -> 'Callable[[], None]':
        '''Callable[[], None]: 'FilterCandidates' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.FilterCandidates

    @property
    def find_dominant_candidates(self) -> 'Callable[[], None]':
        '''Callable[[], None]: 'FindDominantCandidates' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.FindDominantCandidates

    @property
    def save_results(self) -> 'Callable[[], None]':
        '''Callable[[], None]: 'SaveResults' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return self.wrapped.SaveResults

    @property
    def load_case_duty_cycle(self) -> 'TAnalysis':
        '''TAnalysis: 'LoadCaseDutyCycle' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(TAnalysis)(self.wrapped.LoadCaseDutyCycle) if self.wrapped.LoadCaseDutyCycle else None

    @property
    def selected_candidate(self) -> 'TAnalysis':
        '''TAnalysis: 'SelectedCandidate' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(TAnalysis)(self.wrapped.SelectedCandidate) if self.wrapped.SelectedCandidate else None

    @property
    def selected_design_space_search_strategy(self) -> '_1007.ParetoOptimisationStrategy':
        '''ParetoOptimisationStrategy: 'SelectedDesignSpaceSearchStrategy' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1007.ParetoOptimisationStrategy)(self.wrapped.SelectedDesignSpaceSearchStrategy) if self.wrapped.SelectedDesignSpaceSearchStrategy else None

    @property
    def optimisation_targets(self) -> 'List[_929.OptimisationTarget[TAnalysis]]':
        '''List[OptimisationTarget[TAnalysis]]: 'OptimisationTargets' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.OptimisationTargets, constructor.new(_929.OptimisationTarget)[TAnalysis])
        return value

    @property
    def input_setters(self) -> 'List[_1037.InputSetter[TAnalysis]]':
        '''List[InputSetter[TAnalysis]]: 'InputSetters' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.InputSetters, constructor.new(_1037.InputSetter)[TAnalysis])
        return value

    @property
    def table_filters(self) -> 'List[_944.TableFilter[TAnalysis, TCandidate]]':
        '''List[TableFilter[TAnalysis, TCandidate]]: 'TableFilters' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.TableFilters, constructor.new(_944.TableFilter)[TAnalysis, TCandidate])
        return value

    @property
    def candidate_designs_to_display(self) -> 'List[TCandidate]':
        '''List[TCandidate]: 'CandidateDesignsToDisplay' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.CandidateDesignsToDisplay, constructor.new(TCandidate))
        return value

    @property
    def chart_details(self) -> 'List[_909.ChartInfoBase[TAnalysis, TCandidate]]':
        '''List[ChartInfoBase[TAnalysis, TCandidate]]: 'ChartDetails' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ChartDetails, constructor.new(_909.ChartInfoBase)[TAnalysis, TCandidate])
        return value

    @property
    def all_candidate_designs_including_original_design(self) -> 'List[TCandidate]':
        '''List[TCandidate]: 'AllCandidateDesignsIncludingOriginalDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AllCandidateDesignsIncludingOriginalDesign, constructor.new(TCandidate))
        return value

    @property
    def all_candidate_designs_to_display(self) -> 'List[TCandidate]':
        '''List[TCandidate]: 'AllCandidateDesignsToDisplay' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AllCandidateDesignsToDisplay, constructor.new(TCandidate))
        return value

    @property
    def all_candidate_designs_to_display_without_original_design(self) -> 'List[TCandidate]':
        '''List[TCandidate]: 'AllCandidateDesignsToDisplayWithoutOriginalDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AllCandidateDesignsToDisplayWithoutOriginalDesign, constructor.new(TCandidate))
        return value

    @property
    def reasons_for_invalid_candidates(self) -> 'List[_941.ReasonsForInvalidDesigns]':
        '''List[ReasonsForInvalidDesigns]: 'ReasonsForInvalidCandidates' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ReasonsForInvalidCandidates, constructor.new(_941.ReasonsForInvalidDesigns))
        return value

    @property
    def filters(self) -> 'List[_1080.ParetoOptimisationFilter]':
        '''List[ParetoOptimisationFilter]: 'Filters' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Filters, constructor.new(_1080.ParetoOptimisationFilter))
        return value
