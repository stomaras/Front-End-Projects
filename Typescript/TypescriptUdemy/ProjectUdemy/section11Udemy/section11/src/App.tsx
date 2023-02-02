import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState<Boolean>(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}


export default App;

/*

UI Folder :
- Place general UI Elements, input component, card component

Layout Folder :
- Header Component

Meals Folder :
- That's folder will hold that list of meals, but also the individual meal item components.

Card Folder : 
- Will hold all the card related components.




*/
