import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { decreaseItem, increaseItem, removeItem } from '../state/action-creators';

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

    const handleIncrease = (id:string) => (e:React.MouseEventHandler<HTMLButtonElement>) => {
        dispatch(increaseItem(id))
    }

    const handleDecrease = (id:string, amount:number) => (e:React.MouseEventHandler<HTMLButtonElement>) => {
        if(amount === 1){
            dispatch(removeItem(id))
            return;
        }else{
            dispatch(decreaseItem(id))
        }
    }


  const {id, img, title, price, amount} = props;
  
  return (
    <article className='cart-item'>
        <img src={img} alt="" />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">{price}</h4>
            {/* remove button */}
            <button className='remove-btn' onClick={handleRemove(id)}>remove</button>
        </div>
        <div>
            {/*increase amount */}
            <button className="amount-btn" onClick={handleIncrease(id)}>
                <FaChevronUp/>
            </button>
            {/* amount */}
            <p className="amount">{amount}</p>
            {/*decrease amount */}
            <button className="amount-btn" onClick={handleDecrease(id,amount)}>
                <FaChevronDown/>
            </button>
        </div>
    </article>
  )
}

export default CartItem