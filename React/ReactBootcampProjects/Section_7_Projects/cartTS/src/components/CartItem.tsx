import React from 'react'
import {FaChevronDown, FaChevronUp} from "react-icons/fa"
import { Item } from '../models/models'
import useCart from '../hooks/useCart';

interface CartItemProps {
    key:string;
    item:Item;
} 

const CartItem = (props: CartItemProps) => {

    const {item} = props;

    const {removeItem, increaseItemAmount, decreaseItemAmount} = useCart();

    const handleRemove = (id:string) => (e:React.MouseEvent<HTMLButtonElement>) => {
        removeItem(id)
    }

    const handleIncreaseAmount = (id:string) => (e:React.MouseEvent<HTMLButtonElement>) => {
        increaseItemAmount(id);
    }

    const handleDecreaseAmount = (id:string) => (e:React.MouseEvent<HTMLButtonElement>) => {
        decreaseItemAmount(id);
    }
 
  return (
    <article className='cart-item'>
        <img src={item.img} alt="Dummy Image" className='cart-item-img' />
        <div className='cart-item-info'>
            <h4>${item.title}</h4>
            <span className="item-price">${item.price}</span>
            <button className="remove-btn" onClick={handleRemove(item.id)}>remove</button>
        </div>
        <div className='cart-item-button'>
            {/* increase amount */}
            <button className="amount-btn" onClick={handleIncreaseAmount(item.id)}>
                <FaChevronUp className='amount-icon'/>
            </button>
            {/*amount*/}
            <span className="amount">${item.amount}</span>
            {/* decrease amount */}
            <button className="amount-btn" onClick={handleDecreaseAmount(item.id)}>
                <FaChevronDown className='amount-icon'/>
            </button>
        </div>
    </article>
  )
}

export default CartItem