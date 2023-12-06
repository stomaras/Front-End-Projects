import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { increaseItem, removeItem } from '../state/action-creators';

export interface CartItemProps {
    amount:number;
    title:string;
    id:string;
    img:string;
    price:string;
}


const CartItem = (props:CartItemProps) => {

    const dispatch = useDispatch();

        
    const handleRemove = (id:string) => (e:React.MouseEventHandler<HTMLButtonElement>):void => {
        dispatch(removeItem(id))
    }


    const {id, img, title, price, amount} = props;
  return (
    <article className='cart-item'>
        <img src={img} alt="" />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">{price}</h4>
            {/* remove button */}
            <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>remove</button>
        </div>
        <div>
            {/*increase amount */}
            <button className="amount-btn" onClick={() => dispatch(increaseItem(id))}>
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