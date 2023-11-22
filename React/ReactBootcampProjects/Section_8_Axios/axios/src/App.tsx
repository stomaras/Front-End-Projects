import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstRequest from './components/first-request'
import Headers from './components/Headers'
import PostRequest from './components/PostRequest'
import "./axios/global"
import GlobalInstance from './components/GlobalInstance'
import CustomIntance from './components/CustomIntance'
import Interceptors from './components/Interceptors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Interceptors/>
    </>
  )
}

export default App
