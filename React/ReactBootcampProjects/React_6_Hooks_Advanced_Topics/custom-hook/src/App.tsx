import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultipleRetursFetchData from './MultipleRetursFetchData';
import useFetchPerson from './customHooks/UseFetchPerson';
import UseFetchPerson from './customHooks/UseFetchPerson';

const url = "https://api.github.com/users/QuincyLarson";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MultipleRetursFetchData/>
    </>
  )
}

export default App
