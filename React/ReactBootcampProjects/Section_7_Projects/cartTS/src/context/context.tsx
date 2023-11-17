import { ReactElement, createContext, useMemo, useReducer } from "react";
import { CLEAR_CART } from "../actions/actions";
import cartItems from "../data/data";

export interface CartItemType {
    id:string;
    title:string;
    price:string;
    img:string;
    amount:number;
}

type CartStateType = {cart: CartItemType[]};

const initCartState: CartStateType = {cart:cartItems};

const REDUCER_ACTION_TYPE = {
    CLEAR: 'CLEAR',
    REMOVE: 'REMOVE',
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;


export type ReducerAction = {
    type:string,
    payload: CartItemType[]
}

const reducer = (state:CartStateType, acton: ReducerAction): CartStateType => {
    switch(acton.type){
        case REDUCER_ACTION_TYPE.CLEAR: {
            console.log("clear reducer");
            return {...state, cart:[]}
        }
        default:
            throw new Error("error")
    }
}

const useCartContext = (initCartState: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState);
    console.log(state.cart);

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE;
    },[]);

    const clearCart = () => {
        console.log("clear dispatch");
        dispatch({
            type: REDUCER_ACTION_TYPE.CLEAR,
            payload: []
        });
    }

    const carts = state.cart;

    return {dispatch, REDUCER_ACTIONS ,clearCart, carts}
}

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {dispatch: () => {}, REDUCER_ACTIONS: REDUCER_ACTION_TYPE, clearCart: () => {}, carts:[]};

export const CartContext = createContext<UseCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({children}: ChildrenType):ReactElement => {
    return (
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;