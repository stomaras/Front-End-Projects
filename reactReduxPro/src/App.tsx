import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Cart from './components/Cart/Cart'
import { useAppSelector, useAppDispatch } from './store'
import { showNotification } from './store/ui-slice'
import {Notification} from "../src/components/UI/Notification";

let isInitial = true;

function App() {

  const showCart = useAppSelector((state) => state.ui.cartIsVisible);
  // set up subscription to redux 
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state) => state.ui.notification);

  useEffect(() => {
    
    const sendCartData = async () => {
      console.log("dispatch pending");
      
      dispatch(showNotification({
        status:'pending',
        title:'Sending...',
        message:'Sending Cart Data!'
      }));
      const response = await fetch('https://react-a4e6b-default-rtdb.firebaseio.com/cart.json', {
        method:'PUT',
        body: JSON.stringify(cart),
      });
      
      if(!response.ok) {
        console.log("dispatch error");
        dispatch(showNotification({
          status:'error',
          title:'Error!',
          message:'Sending Cart Data Failed!'
        }));  
      }else {
        dispatch(showNotification({
          status:'success',
          title:'Success!',
          message:'Send Cart Data Successfully!'
        }));
      }

    }

    if(isInitial){
      isInitial = false;
      return;
    }

    sendCartData()
  },[cart, dispatch])

  return (
    <>
    {notification && (
      <Notification 
        status={notification.status} 
        title={notification.title} 
        message={notification.message}/>
    )}
    <Layout>
      {showCart && <Cart/>}
      <Products/>
    </Layout>
    </>
  )
}

export default App