import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Nav/Navigation'
import Products from './containers/Products'
import Favorites from './containers/Favorites'

function App() {

  return (
    <>
      <Navigation/>
      <main>
        <Routes>
          <Route path="/" Component={Products}/>
          <Route path='/favorites' Component={Favorites}/>
        </Routes>
      </main>
    </>
  )
}

export default App
