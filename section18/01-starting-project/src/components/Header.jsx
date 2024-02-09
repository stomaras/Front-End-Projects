import React from 'react'
import logoImg from "../assets/logo.jpg";
import Button from './UI/Button';

const Header = () => {
  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logoImg} alt="A restaurant" />
            <h1>React Food</h1>
        </div>
        <nav>
            <button textOnly>Cart (0)</button>
        </nav>
    </header>
  )
}

export default Header