import React from 'react'
import {FaChevronDown, FaChevronUp} from "react-icons/fa"
import { Item } from '../models/models'

interface CartItemProps {
    key:string;
    item:Item;
} 

const CartItem = (props: CartItemProps) => {

    const {item} = props;

  return (
    <article className='cart-item'>
        <img src={item.img} alt="Dummy Image" className='cart-item-img' />
        <div className='cart-item-info'>
            <h4>${item.title}</h4>
            <span className="item-price">${item.price}</span>
            <button className="remove-btn">remove</button>
        </div>
        <div className='cart-item-button'>
            {/* increase amount */}
            <button className="amount-btn">
                <FaChevronUp className='amount-icon'/>
            </button>
            {/*amount*/}
            <span className="amount">${item.amount}</span>
            {/* decrease amount */}
            <button className="amount-btn">
                <FaChevronDown className='amount-icon'/>
            </button>
        </div>
    </article>

  )
}

export default CartItem