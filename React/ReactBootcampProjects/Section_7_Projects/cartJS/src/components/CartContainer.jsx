import React from 'react'
import CartItem from './CartItem'
import cartItems from "../data/data";

const CartContainer = () => {
  return (
    <section className='cart'>
        <header>
            <h2>Your Bag</h2>
        </header>
        <div>
            {cartItems.map((cartItem) => {
                return <CartItem key={cartItem.id} {...cartItem}/>;
            })}
        </div>
        {/*cart footer*/}
        <hr />

        <footer className='footer'>
            
            <h5 className="cart-total-desc">
                Total 
            </h5>        
            <button className='btn btn-hipster'>
                Clear Cart
            </button>
            <span className='cart-total-price'>$10</span>
        </footer>
    </section>
  )
}

export default CartContainer