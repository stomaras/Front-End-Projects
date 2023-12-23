import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProvider from './contexts/UserContext'
import UserDetails from './components/UserDetails'
import AnotherComponent from './components/AnotherComponent'



function App() {

  return (
    <>
    <UserProvider>
      <UserDetails/>
      <AnotherComponent/>
    </UserProvider>
    </>
  )
}

export default App
