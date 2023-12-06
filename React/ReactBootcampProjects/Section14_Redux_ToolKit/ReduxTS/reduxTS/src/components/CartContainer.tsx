import React, { useState } from 'react'
import CartItem from './CartItem'
import { useDispatch } from 'react-redux';
import {  clearCart, openModal } from '../state/action-creators';
import { IProduct } from '../models/models';

export interface CartContainerProps {
    products:IProduct[];
    total:number;
    amount:number;
}

const CartContainer = (props:CartContainerProps) => {
    
    const {products, total, amount} = props;

//   let cart, products;

//   cart = useTypedSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(openModal())
    }

    if(amount < 1){

        return (
            <section className='cart'>
            {/* cart header */}
            <header>
                <h2>Your Bug is currently empty</h2>
            </header>            
        </section>
        );
    }
    
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
                    total <span>${total.toFixed(2)}</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={handleOpenModal}>clear cart</button>
        </footer>
    </section>
  )
}

export default CartContainer