import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "../src/components/Navbar";
import CartContainer from "../src/components/CartContainer";
import { useGlobalContext } from './context/context';

function App() {
  const [count, setCount] = useState(0)

  const {loading} = useGlobalContext()

  if(loading) {
    return <main>
      <div className="loading">Loading...</div>
    </main>
  }

  return (<div className='app'>
      <Navbar/>
      <CartContainer/>
    </div>
  )
  
}

export default App
