import React from 'react'
import CartItem from './CartItem'
import cartItems from '../data/data'
import { CartProvider } from '../context/context'
import useCart from "../hooks/useCart";

const CartContainer = () => {

    const {dispatch, REDUCER_ACTIONS, clearCart, carts} = useCart();


    const handleClear = () => {
        console.log("clear");
        clearCart();
    }


  return (
    <section className="cart">
        {/* cart header */}
        <header>
            <h3>Your Bag</h3>
        </header>
        {/* cart items */}
        <div>
            {carts.map((cartItem) => {
                return <CartItem item={cartItem} key={cartItem.id} />;
            })}
        </div>
        {/* cart footer */}
        <footer className='footer'>
            
            <h5 className="cart-total-desc">
                Total 
            </h5>        
            <button className='btn btn-hipster' onClick={handleClear}>
                Clear Cart
            </button>
            <span className='cart-total-price'>${10}</span>
        </footer>
    </section>
  )
}

export default CartContainer