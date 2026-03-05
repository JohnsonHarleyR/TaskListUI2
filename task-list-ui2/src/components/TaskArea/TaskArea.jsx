import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../TaskContext";
import './taskArea.css';
import TaskList from "../TaskList/TaskList";


const TaskArea =() => {

    const { tasks } = useContext(TaskContext);
    const [currentTab, setCurrentTab] = useState("Incomplete");
    const [selectedTaskId, setSelectedTaskId] = useState(null);

    const completeTasks = tasks.filter(task => task.isCompleted);
    const incompleteTasks = tasks.filter(task => !task.isCompleted);

    const selectedTask = tasks.find(task => task.id === selectedTaskId);

    useEffect(() => {
        console.log("Selected task ID changed:", selectedTaskId);
    }, [selectedTaskId]);

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

    // show tabs with list of complete and incomplete tasks
    // when an item is clicked, show the details of the task and allow editing of the task details
    // allow the user to mark a task as complete or incomplete
    // allow the user to delete a task or add a new one
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
            <TaskList tasksToList={getTasksToList()} selectedTaskId={selectedTaskId} setSelectedTaskId={setSelectedTaskId} />
        </div>
      </div>
      <div id="button-area">
        test
      </div>
    </div>
    );


}

export default TaskArea;