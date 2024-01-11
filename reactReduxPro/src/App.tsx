import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Cart from './components/Cart/Cart'
import { useAppSelector } from './store'

function App() {

  const showCart = useAppSelector((state) => state.ui.cartIsVisible);

  return (
    <>
    <Layout>
      {showCart && <Cart/>}
      <Products/>
    </Layout>
    </>
  )
}

export default App
