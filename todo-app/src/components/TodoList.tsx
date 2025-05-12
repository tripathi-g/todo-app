import React from 'react';
import { Todo } from '@/types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  isLoading: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  isLoading, 
  onToggle, 
  onDelete 
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No todos found. Add some!
      </div>
    );
  }

  return (
    <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
