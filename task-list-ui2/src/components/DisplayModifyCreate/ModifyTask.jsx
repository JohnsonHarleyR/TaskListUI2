import "./displayModifyCreate.css";
import { formatDate } from "../../js/helpers";
import { useContext, useRef } from "react";
import { TaskContext } from "../../TaskContext";
import Button from "../subcomponents/Button/Button";
import { DisplayMode } from "../../js/constants";
import { modifyTask } from "../../js/data";

const ModifyTask = ({taskToDisplay}) => {

    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const isCompletedRef = useRef();
    const isNotCompletedRef = useRef();

    const {setDisplayMode, tasks, setTasks} = useContext(TaskContext);

    // TODO format date so it displays correctly in the input field

    function saveChanges() {
        console.log()
        // TODO: error handing in case api call fails
        const isCompleted = isCompletedRef.current.checked;
        const updatedTask = {
            ...taskToDisplay,
            description: descriptionRef.current.value,
            dueDate: dueDateRef.current.value,
            isCompleted: isCompleted
        };

        console.log("Updated task:", updatedTask);

        const updatedTaskList = tasks.map(task => {
            if (task.id === updatedTask.id) {
                return updatedTask; 
            } else {
                return task;
            }
        });

        // send api request to update the task on the server
        modifyTask(updatedTask).then((updatedTaskFromServer) => {
            setTasks(updatedTaskList);
            setDisplayMode(DisplayMode.DISPLAY);
        });
    }
    
    return (
        <div className="main-area">
            <form name="modify-task-form">
                <p><b>Created:</b> {formatDate(taskToDisplay.creationDate)}</p>
                <p><b>Description:</b><textarea ref={descriptionRef} name="description" defaultValue ={taskToDisplay.description}></textarea></p>
                <p><b>Due:</b> <input type="date" id="myDate" ref={dueDateRef} defaultValue={taskToDisplay.dueDate} /></p>
                <p><b>Status:</b> 
                    <label>
                        <input type="radio" name="status" value="complete" ref={isCompletedRef} defaultChecked={taskToDisplay.isCompleted} /> Complete
                    </label>
                    <label>
                        <input type="radio" name="status" value="incomplete" ref={isNotCompletedRef} defaultChecked={!taskToDisplay.isCompleted} /> Incomplete
                    </label>
                </p>
                <p className="center">
                    <Button text="Save Changes" onClick={saveChanges} />
                </p>
            </form>
            
        </div>
    );
}

export default ModifyTask;