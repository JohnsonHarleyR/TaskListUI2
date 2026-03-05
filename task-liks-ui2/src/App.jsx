import { useContext, useState } from 'react'
import { TaskContext } from './TaskContext'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const {tasks, areTasksLoaded} = useContext(TaskContext);



  return (
    <>
    {areTasksLoaded ? 
        <div>
          <p>Loading...</p>
        </div>
        :
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
    }
      
    </>
  )
}

export default App
