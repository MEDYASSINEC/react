import React, { useContext, useReducer, useState } from "react";
import { userContext } from "../App";
import TaskForm from "./TaskForm";

const TaskItem = React.memo(function TaskItem ( { task, toggleTaskCompletion } ) {
    const {tasks, setTasks} = useContext(userContext);

    function deleteTask(taskId) {
        setTasks(tasks.filter(t => t.id !== taskId));
    }   

    const reducer = (state, action) => {
        switch (action.type) {
            case 'edit':
                return true;
            case 'close':
                return false;
            case 'delete':
                deleteTask(task.id);
                return state;
            default:
                return state;
        }
    };
    const [displayForm, dispatch] = useReducer(reducer, false);
    return (
        <li className={`task-item ${task.done ? 'done' : ''}`} 
            onDoubleClick={() => dispatch({ type: 'edit' })}>
            <input 
                type="checkbox" 
                className="task-checkbox"
                checked={task.done}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            <div className="task-content">
                <h3 className="task-title">{task.title}</h3>

                <div className="task-meta">
                    <span className={`task-priority ${task.priority}`}>
                        {task.priority === 'high' && '🔴 '}
                        {task.priority === 'medium' && '🟡 '}
                        {task.priority === 'low' && '🟢 '}
                        {task.priority}
                    </span>


                    <span className="badge-secondary" style={{ 
                        padding: 'var(--spacing-xs) var(--spacing-sm)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.75rem',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border)'
                    }}>
                        {task.createdAt}
                    </span>
                </div>
            </div>
            <button className="btn btn-success" onClick={() => dispatch({ type: 'edit' })}>✏️</button>
            <button className="btn btn-danger" onClick={() => dispatch({ type: 'delete' })}>
                🗑️
            </button>
            <TaskForm className="card-center" displayForm={displayForm} setDisplayForm={() => dispatch({ type: 'close' })} action="edit" taskTEdt={task.id} ></TaskForm>
        </li>
    )
});

export default TaskItem;