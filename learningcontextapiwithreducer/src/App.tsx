import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuiz } from './context/context'

function App() {

  const state = useQuiz();
  console.log(state);
  

  return (
    <>
    </>
  )
}

export default App
