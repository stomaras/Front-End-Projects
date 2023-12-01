import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from './features/cart/cartSlice';
import './App.css'
import {Navbar} from "./components/Navbar";
import CartContainer from './components/CartContainer';

function App() {

  const {cartItems} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  },[cartItems]);

  return (
    <>
    <Navbar/>
    <CartContainer/>
    </>
  )
}

export default App
