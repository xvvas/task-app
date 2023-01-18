import React from "react";
import "../stylesheet/task.css";
import { MdClear } from "react-icons/md";

function Task({ text, completed, id, taskCompleted, taskDeleted }) {
  return (
    <div className={completed ? "task_component -completed" : "task_component"}>
      <div 
        className="task_text" 
        onClick={() => taskCompleted(id)}>
        {text}
      </div>
      <div 
      className="task_conatinerIcons"
      onClick={() => taskDeleted(id)}>
        <MdClear className="task_icon"  />
      </div>
    </div>
  );
}

export default Task;
