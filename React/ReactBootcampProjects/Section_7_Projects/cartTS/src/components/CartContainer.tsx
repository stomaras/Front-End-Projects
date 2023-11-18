import React from 'react'
import CartItem from './CartItem'
import cartItems from '../data/data'
import { CartProvider } from '../context/context'
import useCart from "../hooks/useCart";

const CartContainer = () => {

    const {dispatch, REDUCER_ACTIONS, clearCart, carts, totalCost} = useCart();


    const handleClear = () => {
        clearCart();
    }

    if(carts.length === 0) {
        return (
            <section className="cart">
                <header>
                    <h2>Your Bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
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
                Total {totalCost.toFixed(2)}
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