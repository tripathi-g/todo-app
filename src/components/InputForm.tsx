import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import useTask from "../hooks/useTask";
const InputForm: React.FC = () => {
  const { handleAddTask, handleTaskInputChange } = useTask();
  const { task } = useAppContext();
  return (
    <form className="w-full flex justify-center" onSubmit={handleAddTask}>
      <div className="w-full max-w-[600px] form-group flex items-center justify-between gap-2 bg-white p-1 lg:p-2 rounded-full border border-stone-100 focus-within:border-stone-300 shadow-md">
        <input
          type="text"
          placeholder="Enter a task"
          className="w-full border-0 outline-0 pl-3 rounded-full"
          value={task}
          onChange={handleTaskInputChange}
        />
        <button className="bg-purple-700 rounded-full text-white font-black p-3 shadow-md text-base border-0 outline-0">
          Go
        </button>
      </div>
    </form>
  );
};

export default InputForm;
