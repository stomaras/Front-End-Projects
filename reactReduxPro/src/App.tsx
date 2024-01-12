import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Cart from './components/Cart/Cart'
import { useAppSelector } from './store'

function App() {

  const showCart = useAppSelector((state) => state.ui.cartIsVisible);
  // set up subscription to redux 
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    fetch('https://react-a4e6b-default-rtdb.firebaseio.com/cart.json', {
      method:'PUT',
      body: JSON.stringify(cart),
    });
  },[cart])

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
