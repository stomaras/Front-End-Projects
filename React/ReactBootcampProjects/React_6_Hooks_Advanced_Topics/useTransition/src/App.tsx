import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LatestReact from './components/LatestReact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LatestReact/>
    </>
  )
}

export default App
