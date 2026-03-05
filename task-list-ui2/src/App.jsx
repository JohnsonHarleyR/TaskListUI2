import { useContext, useState } from 'react'
import { TaskContext } from './TaskContext'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
    }
      
    </div>
  )
}

export default App
