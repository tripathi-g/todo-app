import React from 'react';
import { TodoFilter as FilterType } from '@/types';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <FilterButton 
        label="All" 
        isActive={currentFilter === 'all'} 
        onClick={() => onFilterChange('all')} 
      />
      <FilterButton 
        label="Active" 
        isActive={currentFilter === 'active'} 
        onClick={() => onFilterChange('active')} 
      />
      <FilterButton 
        label="Completed" 
        isActive={currentFilter === 'completed'} 
        onClick={() => onFilterChange('completed')} 
      />
    </div>
  );
};

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-md ${
        isActive
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {label}
    </button>
  );
};

export default TodoFilter;
