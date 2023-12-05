import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export interface CartItemProps {
    amount:number;
    title:string;
    id:string;
    img:string;
    price:string;
}

const CartItem = (props:CartItemProps) => {

    const {id, img, title, price, amount} = props;
  return (
    <article className='cart-item'>
        <img src={img} alt="" />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">{price}</h4>
            {/* remove button */}
            <button className='remove-btn'>remove</button>
        </div>
        <div>
            {/*increase amount */}
            <button className="amount-btn">
                <FaChevronUp/>
            </button>
            {/* amount */}
            <p className="amount">{amount}</p>
            {/*decrease amount */}
            <button className="amount-btn">
                <FaChevronDown/>
            </button>
        </div>
    </article>
  )
}

export default CartItem