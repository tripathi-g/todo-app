import React, { ReactNode } from "react"

export interface Task {
    id:number,
    name:string,
    isDone:boolean
}

export type Tasks = Task[] 

export interface AppContextInterface
{
    task:string,
    setTask:React.Dispatch<React.SetStateAction<string>>,
    tasks:Tasks|null,
    setTasks:React.Dispatch<React.SetStateAction<Tasks | null>>
}

export interface AppContextProviderProps{
    children:ReactNode
}


export interface UseTask {
    handleTaskInputChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    handleAddTask:(e:React.FormEvent)=>void,
    handleRemoveFromList:(id:number)=>void,
    markAsComplete:(id:number)=>void
}