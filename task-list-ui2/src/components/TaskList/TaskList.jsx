import "./TaskList.css";
import { DisplayMode } from "../../js/constants";
import { useContext } from "react";
import { TaskContext } from "../../TaskContext";

const TaskList = ({tasksToList}) => {

    console.log("Rendering TaskList with tasks:", tasksToList);

    const {selectedTaskId, setSelectedTaskId, setDisplayMode} = useContext(TaskContext);
    const listDisplaySize = 10;

    function selectTask(taskId) {
        console.log("Task selected with ID:", taskId);
        setSelectedTaskId(taskId);
        setDisplayMode(DisplayMode.DISPLAY);
    }

    function getTaskOption(task) {
        if (task.id === selectedTaskId) {
            return (
                <option key={task.id} value={task.id} selected onClick={() => selectTask(task.id)}>
                    {task.description}
                </option>
            );
        } else {    
            return (
                <option key={task.id} value={task.id} onClick={() => selectTask(task.id)}>
                    {task.description}
                </option>
            );
        }
    }

    return (
        <div id="task-list">
            <select className="form-select" size={listDisplaySize} aria-label={`size ${listDisplaySize} select example`}>
                {tasksToList.map((task) => {
                    return getTaskOption(task);
                })}
            </select>
        </div>
    );
}

export default TaskList;