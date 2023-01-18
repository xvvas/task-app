import React, {useState} from "react";
import Task from "./task";
import TaskForm from "./taskForm";
import '../stylesheet/taskList.css'
function TaskList(){
  const [tasks, setTask] =useState([]);

  const addTask = task => {
    if(task.text.trim()){
      task.text = task.text.trim();
      const taskUpdated = [task, ...tasks];
      setTask(taskUpdated);
    }
  }

//delete task

const taskDeleted = id => {
  const  taskUpdated = tasks.filter(task => task.id !== id);
  setTask(taskUpdated);
}
// Task Completed

const taskCompleted = id => {
  const taskUpdated = tasks.map(task => {
    if(task.id === id){
      task.completed = !task.completed;
    }
    return task
  });
  setTask(taskUpdated);
}

  return(
    <>
    <TaskForm onSubmit={addTask}/>
    <div className="list_taskConainer">
      {
        tasks.map((task) =>
        <Task 
        key={task.id}
        id={task.id}
        text={task.text}
        completed={task.completed}
        taskDeleted={taskDeleted}
        taskCompleted={taskCompleted} />

        )
      }
    </div>
    </>
  )
}
export default TaskList;