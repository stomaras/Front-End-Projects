import React from 'react'
import CartItem from './CartItem'
import cartItems from '../data/data'
import { useGlobalContext } from '../context/context'

const CartContainer = () => {

    const {cart, clearCart} = useGlobalContext();
    console.log(cart);
    const cartArray = Array.from(cart.entries());

    const handleClear = () => {
        console.log("clear");
        clearCart();
    }

    if(cartArray.length === 0) {
        return (
            <section className='cart'>
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
            {cartArray.map((cartItem) => {
                const [id, item] = cartItem
                return <CartItem item={item} key={id} />;
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