import React from "react";
import { Task } from "../model";
import { SiTicktick } from "react-icons/si";
import { FaRegCircleXmark } from "react-icons/fa6";
import useTask from "../hooks/useTask";
const baseTaskClass =
  "w-full p-4 flex justify-between items-center rounded-md border hover:scale-105 cursor-pointer transition-all ";
const pendingTaskClass = baseTaskClass + "bg-purple-50 border-pink-100";
const completedTaskClass = baseTaskClass + "bg-green-50 border-green-200";
const TaskListItem: React.FC<Task> = ({ id, name, isDone }) => {
  const { markAsComplete, handleRemoveFromList } = useTask();
  return (
    <li
      key={"task" + id}
      className={isDone ? completedTaskClass : pendingTaskClass}
    >
      <p>{name}</p>
      <div className="flex gap-3">
        {!isDone && (
          <SiTicktick
            className="text-green-600 text-xl"
            onClick={() => markAsComplete(id)}
          />
        )}
        <FaRegCircleXmark
          className="text-red-600 text-xl"
          onClick={() => handleRemoveFromList(id)}
        />
      </div>
    </li>
  );
};

export default TaskListItem;
