import { useCallback, useContext, useState } from "react";
import TaskItem from "./TaskItem";
import { userContext } from "../App";
import TaskForm from "./TaskForm";

function TaskList () {
    
    const {tasks, setTasks} = useContext(userContext);

    const toggleTaskCompletion = useCallback( (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, done: !task.done } : task
            )
        );
    });

    

    const [displayForm, setDisplayForm] = useState(false);
    
    return (
        <div className="task-list-container">
            <h2>Task List</h2>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                <ul className="task-list">

                {tasks.map((task) => (
                    <TaskItem
                        key={task.id} 
                        task={task} 
                        toggleTaskCompletion={toggleTaskCompletion}
                    />
                ))}
            </ul>
            )}

            <button className="btn btn-primary" style={{ margin: '8px' }} onClick={() => setDisplayForm(!displayForm)}>New task</button>
            <TaskForm className="card-center" displayForm={displayForm} setDisplayForm={setDisplayForm} ></TaskForm>
        </div>
    )
}

export default TaskList;