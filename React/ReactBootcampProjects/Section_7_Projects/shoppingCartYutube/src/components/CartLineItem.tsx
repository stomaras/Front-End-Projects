import React from 'react';
import { CartItemType } from '../context/CartProvider';
import { ReducerAction } from '../context/CartProvider';
import { ReducerActionType } from '../context/CartProvider';


type PropsType = {
    item: CartItemType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType
}


const CartLineItem = ({item, dispatch, REDUCER_ACTIONS}:PropsType) => {
    
    const lineTotal : number = (item.qty * item.price);

    const highestQTY: number = 20 > item.qty ? 20 : item.qty;

    const optionValues: number[] = [...Array(highestQTY).keys()].map(i => i + 1);
    
    return (
    <div>CartLineItem</div>
  )
}

export default CartLineItem