import React from 'react'
import { useAppContext } from '../context/AppContext'
import { Task, UseTask } from '../model';



const useTask = ():UseTask=> {

    const {task,setTask,tasks,setTasks} = useAppContext();

    const handleTaskInputChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setTask(e.target.value);
    }

    const handleAddTask = (e:React.FormEvent)=>{
        e.preventDefault();
        const tempTask:Task ={
            id:Date.now(),
            name:task,
            isDone:false
        } 
        if(tasks){
        setTasks([tempTask,...tasks])
        }
        else{
            setTasks([tempTask])
        }
        setTask("")
    }

    const handleRemoveFromList= (id:number):void =>{
        if(!tasks) return;

        if(!confirm("Are you sure you want to delete this task?")) return;
        setTasks(tasks.filter((t)=>t.id !==id))
    }

    const markAsComplete = (id:number):void =>{
        if(!tasks) return;
        setTasks(tasks.map((t)=>{
            if(t.id !== id) return t;
            
            return {
                id:t.id,
                name:t.name,
                isDone:true
            }
        }))
    }


    console.log("task",task);
    console.log("tasks",tasks)
    return {
        handleTaskInputChange,
        handleAddTask,
        handleRemoveFromList,
        markAsComplete
    }
}

export default useTask