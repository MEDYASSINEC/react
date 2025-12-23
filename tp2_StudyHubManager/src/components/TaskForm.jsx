import React, { useContext } from "react";
import { userContext as TaskContext } from "../App";

const TaskForm = React.memo(function TaskForm ( { displayForm, setDisplayForm, action, taskTEdt } ) {
    const { tasks, setTasks } = useContext(TaskContext);
    const task = tasks.find(t => t.id === taskTEdt) || null;
    const [taskpriority, setTaskpriority] = React.useState(task ? task.priority : 'low');

    const addTask = (e) => {
        e.preventDefault();
        const title = e.target.elements.tasktitle.value;
        const priority = e.target.elements.taskpriority.value;

        if (!title || !priority) {
            alert('Please fill in all fields');
            return;
        }

        let newId;
        if (tasks.length === 0) {
            newId = 1;
        }else {
            newId = tasks[tasks.length - 1].id + 1;
        }

        const newTask = {
            id: newId,
            title,
            done: false,
            priority,
            createdAt: new Date().toISOString().split('T')[0]
        };

        setTasks((prevTasks) => [...prevTasks, newTask]);
        

        e.target.reset();
    }

    const editTask = (e) => {
        e.preventDefault();
        const title = e.target.elements.tasktitle.value;
        const priority = e.target.elements.taskpriority.value;

        if (!title || !priority) {
            alert('Please fill in all fields');
            return;
        }

        setTasks((prevTasks) =>
            prevTasks.map((t) =>
                t.id === taskTEdt ? { ...t, title, priority } : t
            )
        );

        e.target.reset();
        setDisplayForm(false);
    }

    return (
        <div className="form-container" style={{ display: displayForm ? "block" : "none" }}>
            <h3 className="form-title">Task Form</h3>
            {action === "edit" ? (<button className="btn btn-close-form btn-danger" onClick={setDisplayForm}>x</button>) : 
            <button className="btn btn-close-form btn-danger" onClick={() => setDisplayForm(false)}>x</button>
            }
            <form className="form" onSubmit={(e) => (action === "edit" ? editTask(e) : addTask(e))}>
                <div className="form-group">
                    <label htmlFor="tasktitle" className="form-label">Task title:</label>
                    <input type="text" id="tasktitle" className="form-input" 
                        defaultValue={task?.title || ''} />
                </div>
                <div className="form-group">
                    <label htmlFor="taskpriority" className="form-label">Task priority:</label>
                    <select id="taskpriority" className="form-select" value={taskpriority} onChange={(e) => setTaskpriority(e.target.value)}>
                        <option value="low" >Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    {action === "edit" ? "Edit Task" : "Add Task"}
                </button>
            </form>
        </div>
    )
});

export default TaskForm;    