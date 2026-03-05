import "./displayModifyCreate.css";
import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import Button from "../subcomponents/Button/Button";
import { DisplayMode } from "../../js/constants";
import { deleteTask } from "../../js/data";

const DeleteTask = ({taskIdToDelete}) => {

    const {setDisplayMode, tasks, setTasks} = useContext(TaskContext);

    function clickDeleteTask() {
        deleteTask(taskIdToDelete);

        const updatedTaskList = tasks.filter(task => task.id !== taskIdToDelete);
        setTasks(updatedTaskList);

        setDisplayMode(DisplayMode.NONE);
    }

    return (
        <div className="main-area">
            <h3>Are you sure you want to delete this task?</h3>
            <p className="center">
                <Button text="I'm Sure" onClick={clickDeleteTask}/>
            </p>
            
        </div>
    );
}

export default DeleteTask;