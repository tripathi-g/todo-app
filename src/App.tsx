import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import AppContextProvider from "./context/AppContext";
import ListAllTasks from "./components/ListAllTasks";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <div className="p-4 lg:p-8 2xl:p-12 h-svh max-w-[600px] mx-auto flex flex-col justify-between">
        <div className="flex flex-col items-center gap-4 text-sx">
          <Header />
          <InputForm />
          <ListAllTasks />
        </div>
        <p className="text-xs bg-orange-50 border border-orange-200 p-4 rounded-md">
          <strong>Note:</strong> The data is not persistent. All tasks will be
          deleted if you refresh or leave the page.
        </p>
      </div>
    </AppContextProvider>
  );
};

export default App;
