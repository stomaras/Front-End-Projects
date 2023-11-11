import React from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';

const CartItem = ({id, img, title, price, amount}) => {

    const {greeting} = useGlobalContext();
    console.log(greeting);

  return (
    <article className='cart-item'>
        <img src={img} alt="Dummy Image" className='cart-item-img' />
        <div className='cart-item-info'>
            <h4>{title}</h4>
            <span className="item-price">${price}</span>
            <button className="remove-btn">remove</button>
        </div>
        <div className='cart-item-button'>
            {/* increase amount */}
            <button className="amount-btn">
                <FaChevronUp className='amount-icon'/>
            </button>
            {/*amount*/}
            <span className="amount">${amount}</span>
            {/* decrease amount */}
            <button className="amount-btn">
                <FaChevronDown className='amount-icon'/>
            </button>
        </div>
    </article>
  )
}

export default CartItem