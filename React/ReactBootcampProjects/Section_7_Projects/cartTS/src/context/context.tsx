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

const reducer = (state:CartStateType, action: ReducerAction): CartStateType => {
    switch(action.type){
        case REDUCER_ACTION_TYPE.CLEAR: {
            return {...state, cart:[]};
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            return {...state, cart:state.cart};
        }
        case REDUCER_ACTION_TYPE.INCREASE: {
            return {...state, cart:state.cart}
        }
        default:
            throw new Error("error")
    }
}

const useCartContext = (initCartState: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState);

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE;
    },[]);

    const clearCart = () => {
        dispatch({
            type: REDUCER_ACTION_TYPE.CLEAR,
            payload: []
        });
    }

    const removeItem = (id:string) => {
        const itemsAfterDelete = state.cart.filter((item) => item.id !== id);
        state.cart = itemsAfterDelete;
        dispatch({
            type:REDUCER_ACTIONS.REMOVE,
            payload: state.cart
        });
    }

    const increaseItemAmount = (id:string) => {
        const totalItemsAfterIncrease = state.cart;
        totalItemsAfterIncrease.map((item) => {
            if(item.id === id) {
                item.amount = item.amount + 1;
            }else {
                item.amount = item.amount;
            }
        })
        state.cart = totalItemsAfterIncrease;
        dispatch({
            type:REDUCER_ACTIONS.INCREASE,
            payload: state.cart
        });
    }

    const carts = state.cart;

    return {dispatch, REDUCER_ACTIONS ,clearCart, removeItem , increaseItemAmount ,carts}
}

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {dispatch: () => {}, REDUCER_ACTIONS: REDUCER_ACTION_TYPE, clearCart: () => {}, removeItem: () => {}, increaseItemAmount: () => {} ,carts:[]};

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