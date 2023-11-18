import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import useCart from './hooks/useCart'

function App() {
  const [count, setCount] = useState(0)
  const {loading} = useCart();

  if(loading) {
    return (
      <main>
        <div className="loading">Loading...</div>
      </main>
    )
  }

  return (
    <>
      <Navbar/>
      <CartContainer/>
    </>
  )
}

export default App
