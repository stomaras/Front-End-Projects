import React, { useContext } from 'react'
import logoImg from "../assets/logo.jpg";
import Button from './UI/Button';
import CartContext from '../store/CartContext';

const Header = () => {

  const cartCTX = useContext(CartContext)

  const totalCartItems = cartCTX.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt="A restaurant" />
            <h1>React Food</h1>
        </div>
        <nav>
            <button textOnly>Cart ({totalCartItems})</button>
        </nav>
    </header>
  )
}

export default Header