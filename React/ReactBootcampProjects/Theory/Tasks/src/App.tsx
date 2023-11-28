import React, { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import { ITask } from './models/models'
import { tasksReducer, initialTasks } from './reducer/reducers'

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <>
      <AddTask/>
      <TaskList tasks={tasks}/>
    </>
  )
}

export default App
