import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './categories.styles.scss'
import Category from './components/category-item/category'
import Directory from './components/directory/directory'
import { categories } from './data/data'
import Home from './routes/home/home'
import { Route, Routes, Outlet } from 'react-router-dom'
import Navigation from './routes/navigation/navigation'

const Shop = () => {
  return <h1>I am the shop</h1>
}

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Route>

    </Routes>
  )
}

export default App
