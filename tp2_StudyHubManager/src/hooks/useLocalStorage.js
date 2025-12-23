import { useEffect, useState } from "react";

function useLocalStorage(listTasks) {
    const [value , setValue] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : listTasks;
    })

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(value));
    }, [value]);

    return [value, setValue];
    
}
export default useLocalStorage;