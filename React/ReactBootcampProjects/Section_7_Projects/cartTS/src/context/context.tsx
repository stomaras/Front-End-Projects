import { ReactElement, createContext, useEffect, useMemo, useReducer } from "react";
import { CLEAR_CART, DISPLAY_ITEMS, LOADING } from "../actions/actions";
import cartItems from "../data/data";
import { getTotals } from "../utils";

export interface CartItemType {
    id:string;
    title:string;
    price:string;
    img:string;
    amount:number;
}

type CartStateType = {
    cart: CartItemType[],
    loading:boolean;
};

const initCartState: CartStateType = {
    cart:cartItems,
    loading:false
};

const REDUCER_ACTION_TYPE = {
    CLEAR: 'CLEAR',
    REMOVE: 'REMOVE',
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
    LOADING: 'LOADING',
    DISPLAY_ITEMS: 'DISPLAY_ITEMS'
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
            return {...state, cart:state.cart};
        }
        case REDUCER_ACTION_TYPE.DECREASE: {
            return {...state, cart:state.cart};
        }
        case REDUCER_ACTION_TYPE.LOADING:{
            return {...state, loading: state.loading }
        }
        case REDUCER_ACTION_TYPE.DISPLAY_ITEMS:{
            return {...state, cart: state.cart, loading:false}
        }

        default:
            throw new Error("error")
    }
}

const useCartContext = (initCartState: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState);

    const {totalAmount, totalCost} = getTotals(state.cart);
    const loading = state.loading;

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
        });
        state.cart = totalItemsAfterIncrease;
        dispatch({
            type:REDUCER_ACTIONS.INCREASE,
            payload: state.cart
        });
    }

    const decreaseItemAmount = (id:string) => {
        const totalItemsAfterDelete = state.cart;
        totalItemsAfterDelete.map((item) => {
            if(item.id === id) {
                if(item.amount <= 0){
                    item.amount = 0;
                }else {
                    item.amount = item.amount - 1;
                }
            }else {
                item.amount = item.amount
            }
        });
        state.cart = totalItemsAfterDelete;
        dispatch({
            type:REDUCER_ACTIONS.DECREASE,
            payload:state.cart
        });
    }

    const fetchData = async () => {
        dispatch({type:LOADING,payload:state.cart})
        const url = 'https://www.course-api.com/react-useReducer-cart-project'
        const response = await(fetch(url));
        const cart = await response.json();
        dispatch({type:DISPLAY_ITEMS, payload:state.cart});
        console.log(cart);
    }

    useEffect(() => {
        fetchData();
    },[]);

    const carts = state.cart;

    return {dispatch, REDUCER_ACTIONS ,clearCart, removeItem , increaseItemAmount, decreaseItemAmount ,carts, totalAmount, totalCost, loading}
}

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
    dispatch: () => { }, REDUCER_ACTIONS: REDUCER_ACTION_TYPE, clearCart: () => { }, removeItem: () => { }, increaseItemAmount: () => { }, decreaseItemAmount: () => { }, carts: [],
    totalAmount: 0,
    totalCost: 0,
    loading:false,
};

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