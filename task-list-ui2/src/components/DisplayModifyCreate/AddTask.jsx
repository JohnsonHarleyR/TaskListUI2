import "./displayModifyCreate.css";
import { useContext, useRef } from "react";
import { TaskContext } from "../../TaskContext";
import Button from "../subcomponents/Button/Button";
import { DisplayMode } from "../../js/constants";
import { addTask } from "../../js/data";

const AddTask = ({}) => {

    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const isCompletedRef = useRef();
    const isNotCompletedRef = useRef();

    const {setDisplayMode, tasks, setTasks} = useContext(TaskContext);

    function createTask() {
        // TODO: error handing in case api call fails - reverse to previous state if api call fails
        const isCompleted = isCompletedRef.current.checked;
        const newTask = {
            id: null,
            creationDate: new Date(),
            description: descriptionRef.current.value,
            dueDate: dueDateRef.current.value,
            isCompleted: isCompleted
        };

        // send api request to update the task on the server
        addTask(newTask).then((createdTaskFromServer) => {
            setTasks([...tasks, createdTaskFromServer]);
            setDisplayMode(DisplayMode.NONE);
        });
    }
    
    return (
        <div className="main-area">
            <form name="add-task-form">
                <p><b>Description:</b><textarea ref={descriptionRef} name="description" defaultValue ={"Explain the task"}></textarea></p>
                <p><b>Due:</b> <input type="date" id="myDate" ref={dueDateRef} /></p>
                <p><b>Status:</b> 
                    <label>
                        <input type="radio" name="status" value="complete" ref={isCompletedRef} /> Complete
                    </label>
                    <label>
                        <input type="radio" name="status" value="incomplete" ref={isNotCompletedRef} defaultChecked={true} /> Incomplete
                    </label>
                </p>
                <p className="center">
                    <Button text="Create Task" onClick={createTask} disabled={false}/>
                </p>
            </form>
            
        </div>
    );
}

export default AddTask;