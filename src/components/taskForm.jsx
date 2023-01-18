import React, {useState} from 'react';
import '../stylesheet/taskForm.css'
import {MdSystemUpdateAlt}  from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
function TaskForm (props) {
    const [input, setInput] = useState('')

    const driveChanges = e => {
       setInput(e.target.value)
    }
    const driveSend = e => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }
       props.onSubmit(newTask);
    }
    return(
        <form 
        className='form_container'
        onSubmit={driveSend}>
            <input 
                className='form_input'
                type='text'
                placeholder='Escribe una Tarea'
                name='text'
                onChange={driveChanges}
                />
            <button
            className='form_button'>
                <MdSystemUpdateAlt className='form_icon'/>
            </button>
        </form>
    )
}

export default TaskForm