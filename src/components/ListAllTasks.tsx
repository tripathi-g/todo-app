import React from "react";
import { useAppContext } from "../context/AppContext";
import { Task } from "../model";
import TaskListItem from "./TaskListItem";
const ListAllTasks: React.FC = () => {
  const { tasks } = useAppContext();
  if (!tasks) {
    return <p>No Tasks Found</p>;
  }

  return (
    <div className="w-full max-w-[600px] ">
      <h2 className="mt-6 text-sm">Pending Tasks</h2>
      <ul className="mt-2 w-full flex flex-col gap-3">
        {tasks.map((task: Task) => {
          const { id, isDone, name } = task;
          if (isDone) return;
          return (
            <TaskListItem
              key={"task" + id}
              id={id}
              isDone={isDone}
              name={name}
            />
          );
        })}
      </ul>
      <h2 className="mt-6 text-sm">Completed Tasks</h2>
      <ul className="mt-2 w-full flex flex-col gap-3">
        {tasks.map((task: Task) => {
          const { id, isDone, name } = task;
          if (!isDone) return;
          return (
            <TaskListItem
              key={"task" + id}
              id={id}
              isDone={isDone}
              name={name}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ListAllTasks;
