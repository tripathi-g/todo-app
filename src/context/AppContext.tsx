import { createContext, useContext, useState } from "react";
import { AppContextInterface, AppContextProviderProps, Tasks } from "../model";

const AppContext = createContext<AppContextInterface>({
  task: "",
  setTask: () => {},
  tasks: null,
  setTasks: () => {},
});

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Tasks | null>(null);

  const value = {
    task,
    setTask,
    tasks,
    setTasks,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextInterface => {
  return useContext(AppContext);
};

export default AppContextProvider;
