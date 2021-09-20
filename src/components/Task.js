import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import {TiEdit} from 'react-icons/ti';
import { Link } from 'react-router-dom'
import { BsFillAlarmFill } from 'react-icons/bs'

const Task = ({ task, onDelete, onToggle, onAdd }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} 
            onDoubleClick={() => onToggle(task.id)}>
            <h3>
                <div>
                {task.text + "  "}   
                {task.reminder ? <BsFillAlarmFill /> : <></>}
                </div>
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}/>
            </h3>
            <p>
                {task.time}
                <Link to={`/edit/${task.id}`} onClick={onAdd}>
                    <TiEdit style={{color:'rgb(88, 88, 88)'}}/>
                </Link>
            </p>
        </div>
    )
}

export default Task
