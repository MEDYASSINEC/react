import { useState, useEffect, useContext } from "react";
import { userContext } from "../App";

function Filters ( {setFilteredTasks} ) {
    const { tasks } = useContext(userContext);
    const [filterByT, setfilterByT] = useState('')
    const [filterDone, setfilterDone] = useState(true)
    const [filterUnDone, setfilterUnDone] = useState(true)
    
    useEffect(() => {
        setFilteredTasks(
            tasks.filter(t => {
                if (t.title.includes(filterByT) || !filterByT){
                    if (filterDone && filterUnDone)return t;
                    else if (filterDone && t.done)return t;
                    else if (filterUnDone && !t.done)return t;
                }
            })
        )
    }, [tasks, filterByT, filterDone, filterUnDone, setFilteredTasks])

    const checkAll = (e)=> {
        if (e.target.value){
            setfilterDone(true);
            setfilterUnDone(true)
        }
    }

    return (
        <div>
            <input type="text" placeholder="search task" className="form-input filter-form-input"
                onChange={(e)=>{setfilterByT(e.target.value)}} />
            <input type="checkbox" id="all" className="filter-form-checkbox"
                checked={filterDone && filterUnDone}
                onChange={e=>checkAll(e)} />
            <label htmlFor="all" className="form-label">All</label>
            <input type="checkbox" id="doneTasks" className="filter-form-checkbox"
            checked={filterDone}
            onChange={(e) => setfilterDone(e.target.checked)} />
            <label htmlFor="doneTasks" className="form-label">task done</label>
            <input type="checkbox" id="undoneTasks" className="filter-form-checkbox"
            checked={filterUnDone}
            onChange={(e) => setfilterUnDone(e.target.checked)} />
            <label htmlFor="undoneTasks" className="form-label">task undone</label>
        </div>
    )
}

export default Filters;