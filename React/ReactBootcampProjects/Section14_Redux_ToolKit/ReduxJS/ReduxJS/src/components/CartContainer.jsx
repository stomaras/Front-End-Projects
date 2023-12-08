import React from 'react'
import cartItems from '../cartItems'
import {useSelector, useDispatch} from "react-redux";
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/cart/modalSlice';

const CartContainer = () => {
    const dispatch = useDispatch();
    const {cartItems, amount, total} = useSelector((state) => state.cart);
    console.log(cartItems);

    if(amount < 1){
        return <section className='cart'>
            {/* cart header */}
            <header>
                <h2>Your Bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    };

  return (
    <section className='cart'>
        {/*cart header*/}
        <header>
            <h2>Your Bag</h2>
        </header>
        {/*cart items*/}
        <div>
            {cartItems.map((item) => {
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total <span>${total.toFixed(2)}</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={() => {dispatch(openModal())}}>clear cart</button>
        </footer>
    </section>
  )
}

export default CartContainer