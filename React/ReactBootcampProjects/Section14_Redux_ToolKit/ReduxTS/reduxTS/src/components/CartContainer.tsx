import React, { useEffect } from 'react'
import CartItem from './CartItem'
import {  useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { clearCart } from '../state/action-creators';
import { Action } from '../state/actions/index';


const CartContainer = () => {
    
    let cart, products;

    cart = useTypedSelector((state) => state.cart);


    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart())
    }

    products = cart.cartItems;

    
  return (
    <section className='cart'>
        {/* cart header */}
        <header>
            <h2>Your Bug</h2>
        </header>
        {/* cart items */}
        <div>
            {products.map((product) => {
                return <CartItem key={product.id} amount={product.amount} title={product.title} id={product.id} img={product.img} price={product.price}/>
            })}
        </div>
        {/*cart footer*/}
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total <span>$10</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={handleClear}>clear cart</button>
        </footer>
    </section>
  )
}

export default CartContainer