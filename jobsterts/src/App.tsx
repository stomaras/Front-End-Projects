import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Landing, Error, Dashboard, Register} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Profile, AddJob, AllJobs, Stats, SharedLayout } from './pages/dashboard/index'


function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer position='top-center'/>
        <Routes>
          <Route path='/' element={<SharedLayout/>}>
            <Route index element={<Stats/>}/>
            <Route path='all-jobs' element={<AllJobs/>}/>
            <Route path='add-job' element={<AddJob/>}/>
            <Route path='profile' element={<Profile/>}/>
          </Route>
          <Route path='landing' element={<Landing/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
