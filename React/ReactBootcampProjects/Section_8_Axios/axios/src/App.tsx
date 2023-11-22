import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstRequest from './components/first-request'
import Headers from './components/Headers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers/>
    </>
  )
}

export default App
