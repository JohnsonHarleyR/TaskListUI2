import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../TaskContext";
import './taskArea.css';
import TaskList from "../TaskList/TaskList";
import { DisplayMode } from "../../js/constants";
import DisplayTask from "../DisplayModifyCreate/DisplayTask";
import ModifyTask from "../DisplayModifyCreate/ModifyTask";
import AddTask from "../DisplayModifyCreate/AddTask";
import Button from "../subcomponents/Button/Button";
import DeleteTask from "../DisplayModifyCreate/DeleteTask";


const TaskArea =() => {

    const { tasks, selectedTaskId, 
        displayMode, setDisplayMode } = useContext(TaskContext);

    const [currentTab, setCurrentTab] = useState("Incomplete");

    const completeTasks = tasks.filter(task => task.isCompleted);
    const incompleteTasks = tasks.filter(task => !task.isCompleted);

    const selectedTask = tasks.find(task => task.id === selectedTaskId);

    function getTabClass(defaultClass, tabName) {
        return tabName === currentTab ? `${defaultClass} active` : `${defaultClass}`;
    }

    function changeCurrentTab(tabName) {
        setCurrentTab(tabName);
    }

    function getTasksToList() {
        if (currentTab === "Complete") {
            return completeTasks;  
        } else {
            return incompleteTasks;
        }   
    }

    function getDisplayArea() {
        switch(displayMode) {
            case DisplayMode.DISPLAY:
                return <DisplayTask taskToDisplay={selectedTask} />;
            case DisplayMode.MODIFY:
                return <ModifyTask taskToDisplay={selectedTask} />;
            case DisplayMode.CREATE:
                return <AddTask />;
            case DisplayMode.DELETE:
                return <DeleteTask taskIdToDelete={selectedTaskId} />;
            default:
                return <></>;
        }
    }

    return (
    <div id="full-task-area">
      <div id="main-task-area">
        <div id="list-area">
            <ul id="tab-area" className="nav nav-pills">
                <li className={getTabClass("nav-item", "Incomplete")} onClick={() => changeCurrentTab("Incomplete")}>
                    <p className={getTabClass("nav-link", "Incomplete")}>Incomplete</p>
                </li>
                <li className={getTabClass("nav-item", "Complete")} onClick={() => changeCurrentTab("Complete")}>
                    <p className={getTabClass("nav-link", "Complete")}>Complete</p>
                </li>
            </ul>
            <TaskList tasksToList={getTasksToList()} />
        </div>
        <div id="display-area">
            {getDisplayArea()}
        </div>
      </div>
      <div id="button-area">
        <Button text="Add New Task" onClick={() => { setDisplayMode(DisplayMode.CREATE )}} />
        <Button text="Delete Selected" onClick={() => { setDisplayMode(DisplayMode.DELETE )}}  disabled={selectedTaskId === null} />
      </div>
    </div>
    );


}

export default TaskArea;