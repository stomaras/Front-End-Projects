import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Persons from './components/Persons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Persons/>
    </>
  )
}

export default App
