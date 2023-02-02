import CartContext from "./cart-context";
import { useReducer } from "react";


interface CartState  {
    items: [],
    totalAmount: number
}




const defaultCartState: CartState = {
    items: [],
    totalAmount:0
}

const cartReducer = (state: any, action: any) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}


const CartProvider = (props: any) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: any): void => { 
        dispatchCartAction({type: 'ADD', item:item})
    };
    const removeItemFromCartHandler = (id: number): void => { 
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;