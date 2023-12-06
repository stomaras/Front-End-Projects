
import { Provider, useDispatch } from 'react-redux';
import './App.css'
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import {store} from "../src/state/store";
import { useTypedSelector } from './hooks/useTypedSelector';
import { useEffect } from 'react';
import { calculateTotals } from './state/action-creators';
import Modal from './components/Modal';


function App() {

  
  let cart, products;

  cart = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();
    products = cart.cartItems;

    const {isOpen} = useTypedSelector((state) => state.modal);

    console.log(isOpen);
    
    useEffect(() => {
        dispatch(calculateTotals())
    },[products])

  

  return <main>
          {isOpen && <Modal/>}
          <Navbar amount={cart.amount}/>
          <CartContainer products={products} total={cart.total} amount={cart.amount}/>
      </main>
}

export default App
