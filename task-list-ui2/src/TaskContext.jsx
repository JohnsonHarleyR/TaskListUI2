import { createContext, useEffect, useState } from "react";
import { getAllTasks } from "./js/data";
import { DisplayMode } from "./js/constants";

const TaskContext = createContext();

const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState(null);
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [displayMode, setDisplayMode] = useState(DisplayMode.NONE);

    useEffect(() => {
        //load the project data
        getAllTasks(setTasks);
    }, []);

    const areTasksLoaded = tasks !== null;

    return <TaskContext.Provider value={{
            tasks, setTasks, areTasksLoaded,
            selectedTaskId, setSelectedTaskId,
            displayMode, setDisplayMode
        }}>
        {children}
    </TaskContext.Provider>
}

export {TaskContext};
export default TaskProvider;