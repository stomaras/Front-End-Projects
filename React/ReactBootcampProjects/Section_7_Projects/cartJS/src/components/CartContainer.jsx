import React from 'react'
import CartItem from './CartItem'
import cartItems from "../data/data";
import { useGlobalContext } from '../context/context';

const CartContainer = () => {

    const {cart, clearCart, totalCost } = useGlobalContext();


    const cartArray = Array.from(cart.entries());

    if(cartArray.length === 0) {
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
    <section className='cart'>
        <header>
            <h2>Your Bag</h2>
        </header>
        <div>
            {cartArray.map((cartItem) => {
                const [id, item] = cartItem;
                return <CartItem key={id} {...item}/>
            })}
        </div>
        {/*cart footer*/}
        <hr />

        <footer className='footer'>
            
            <h5 className="cart-total-desc">
                Total 
            </h5>        
            <button className='btn btn-hipster' onClick={clearCart}>
                Clear Cart
            </button>
            <span className='cart-total-price'>${totalCost.toFixed(2)}</span>
        </footer>
    </section>
  )
}

export default CartContainer