import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuiz } from './context/context'

function App() {

  const {state, dispatch} = useQuiz();
  console.log(state);
  

  return (
    <>
    <h2>Status: {state.gameStatus}</h2>
    <button onClick={() => {dispatch({type:"setStatus", payload:"fetching"})}}>Set Loading</button>
    </>
  )
}

export default App
