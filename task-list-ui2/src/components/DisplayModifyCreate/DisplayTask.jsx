import "./displayModifyCreate.css";
import { formatDate } from "../../js/helpers";
import { useContext } from "react";
import { TaskContext } from "../../TaskContext";
import Button from "../subcomponents/Button/Button";
import { DisplayMode } from "../../js/constants";

const DisplayTask = ({taskToDisplay}) => {

    const {setDisplayMode} = useContext(TaskContext);

    return (
        <div className="main-area">
            <p><b>Created:</b> {formatDate(taskToDisplay.creationDate)}</p>
            <h3>{taskToDisplay.description}</h3>
            <p><b>Due:</b> {formatDate(taskToDisplay.dueDate)}</p>
            <p><b>Status:</b> {taskToDisplay.isCompleted ? "Complete" : "Incomplete"}</p>
            <p className="center">
                <Button text="Modify" onClick={() => setDisplayMode(DisplayMode.MODIFY)} />
            </p>
            
        </div>
    );
}

export default DisplayTask;