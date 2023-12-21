import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'

function App() {

  return (
  
     <Routes>
        <Route path='/login' element={<Login/>}>
        </Route>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='*' element={<Error/>}/>
     </Routes>
    
  )
}

export default App
