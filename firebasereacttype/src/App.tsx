import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth/Auth'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='auth' element={<Auth/>}/>
    </Routes>
  )
}

export default App
