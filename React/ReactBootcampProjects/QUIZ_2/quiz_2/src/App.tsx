import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersContainer from './components/UsersContainer'
import Form from './components/Form'

function App() {

  return (
    <>
    <div className='app'>
      <Form/>
      <UsersContainer/>
    </div>

    </>
  )
}

export default App
