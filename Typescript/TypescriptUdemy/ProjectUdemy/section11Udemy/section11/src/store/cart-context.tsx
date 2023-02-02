import React from 'react';

interface CartContextInterface {
    items: any[],
    totalAmount: number,
    addItem(item:any): void,
    removeItem(id:number):void
}

const CartContext = React.createContext<CartContextInterface>({
    items: [],
    totalAmount: 0,
    addItem: (item:any) => { },
    removeItem: (id:Number) => {}
});


export default CartContext;