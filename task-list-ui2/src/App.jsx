import { useContext, useState } from 'react'
import { TaskContext } from './TaskContext'
import './App.css'
import TaskArea from './components/TaskArea/TaskArea'

function App() {
  const [count, setCount] = useState(0)
  const {tasks, areTasksLoaded} = useContext(TaskContext);



  return (
    <div id="app">
      <h1>Task List</h1>
    {!areTasksLoaded ? 
        <div>
          <p>Loading...</p>
        </div>
        :
        <div>
          <TaskArea />
        </div>
    }
      
    </div>
  )
}

export default App
