import { useCallback, useContext, useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { userContext } from "../App";
import TaskForm from "./TaskForm";
import Filters from "./Filters";
import { useNavigate } from "react-router-dom";

function TaskList () {
    
    const {tasks, setTasks, autentifiedUser} = useContext(userContext);
    const [ filteredTasks, setFilteredTasks ] = useState(tasks);
    const navigate = useNavigate();

    // useEffect(()=>{
    //     setFilteredTasks(tasks);
    // })

    const toggleTaskCompletion = useCallback( (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, done: !task.done } : task
            )
        );
    });

    useEffect(()=>{
        if (!autentifiedUser){
            navigate("/login")
        }
    })

    

    const [displayForm, setDisplayForm] = useState(false);
    
    return (
        <div className="task-list-container">
            <Filters setFilteredTasks={setFilteredTasks} />
            <h2>Task List</h2>
            {tasks.length === 0 ? (
                <p>No tasks available.</p>
            ) : (
                <ul className="task-list">
                    {filteredTasks.map((task) => (
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