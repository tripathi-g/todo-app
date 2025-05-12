'use client';

import { useState } from 'react';
import Image from "next/image";
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';
import TodoFilter from '@/components/TodoFilter';
import { useTodos } from '@/lib/hooks/useTodos';

export default function Home() {
  const { 
    todos, 
    isLoading, 
    error, 
    filter, 
    setFilter, 
    addTodo, 
    toggleTodo, 
    deleteTodo 
  } = useTodos();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full max-w-lg">
        <div className="flex justify-center mb-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={25}
            priority
          />
        </div>
        <h1 className="text-3xl font-bold text-center mb-2">
          Todo App
        </h1>
      </header>
      
      <main className="w-full max-w-lg flex flex-col gap-6">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        <TodoForm onAdd={addTodo} />
        
        <TodoFilter 
          currentFilter={filter} 
          onFilterChange={setFilter} 
        />
        
        <TodoList 
          todos={todos} 
          isLoading={isLoading} 
          onToggle={toggleTodo} 
          onDelete={deleteTodo} 
        />
      </main>
      
      <footer className="flex gap-[24px] flex-wrap items-center justify-center mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
