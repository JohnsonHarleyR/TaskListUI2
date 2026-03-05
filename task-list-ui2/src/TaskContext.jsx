import { createContext, useEffect, useState } from "react";
import { getAllTasks } from "./js/data";

const TaskContext = createContext();

const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        //load the project data
        getAllTasks(setTasks);
    }, []);

    const areTasksLoaded = tasks !== null;

    return <TaskContext.Provider value={{
        tasks, areTasksLoaded
        }}>
        {children}
    </TaskContext.Provider>
}

export {TaskContext};
export default TaskProvider;