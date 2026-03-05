import "./TaskList.css";

const TaskList = ({tasksToList, selectedTaskId, setSelectedTaskId}) => {

    console.log("Rendering TaskList with tasks:", tasksToList);
    const listDisplaySize = 7;

    function getTaskOption(task) {
        if (task.id === selectedTaskId) {
            return (
                <option key={task.id} value={task.id} selected onClick={() => setSelectedTaskId(task.id)}>
                    {task.description}
                </option>
            );
        } else {    
            return (
                <option key={task.id} value={task.id} onClick={() => setSelectedTaskId(task.id)}>
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