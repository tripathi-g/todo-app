import { useState, useEffect } from 'react';
import { Todo, TodoFilter } from '@/types';

// In-memory todos storage (simulating a database)
let todos: Todo[] = [
  { id: '1', title: 'Learn Next.js', completed: false },
  { id: '2', title: 'Build a todo app', completed: false },
  { id: '3', title: 'Deploy to production', completed: false },
];

export function useTodos() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch todos (simulating API call)
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setTodoList(todos);
        setError(null);
      } catch (err) {
        setError('Failed to fetch todos');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Filter todos based on current filter
  const filteredTodos = todoList.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all' filter
  });

  // Add a new todo
  const addTodo = async (title: string) => {
    try {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title,
        completed: false,
      };
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Update in-memory storage
      todos = [...todos, newTodo];
      
      // Update state
      setTodoList(prevTodos => [...prevTodos, newTodo]);
    } catch (err) {
      setError('Failed to add todo');
      console.error(err);
    }
  };

  // Toggle todo completion status
  const toggleTodo = async (id: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Update in-memory storage
      todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      
      // Update state
      setTodoList(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    } catch (err) {
      setError('Failed to update todo');
      console.error(err);
    }
  };

  // Delete a todo
  const deleteTodo = async (id: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Update in-memory storage
      todos = todos.filter(todo => todo.id !== id);
      
      // Update state
      setTodoList(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error(err);
    }
  };

  return {
    todos: filteredTodos,
    isLoading,
    error,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}
