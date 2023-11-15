import { useMemo, useReducer } from "react";

export interface CartItemType  {
    sku:string;
    name:string;
    price:number;
    qty:number;
}

type CartStateType = {cart: CartItemType[]};

const initCartState: CartStateType = {cart:[]}

const REDUCER_ACTION_TYPE = {
    ADD:'ADD',
    REMOVE:'REMOVE',
    QUANTITY:'QUANTITY',
    SUBMIT:'SUBMIT'
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
    type:string,
    payload: CartItemType,
}

const reducer = (state:CartStateType, action:ReducerAction): CartStateType => {
    switch(action.type){
        case REDUCER_ACTION_TYPE.ADD:{
            if(action.payload){
                throw new Error('action.payload missing in ADD Action')
            }
            const {sku, name, price} = action.payload;

            const filteredCart:CartItemType[] = state.cart.filter((item) => item.sku !== sku);

            const itemExists:CartItemType | undefined = state.cart.find((item) => item.sku === sku);

            const qty: number = itemExists ? itemExists.qty + 1 : 1;

            return { ...state, cart: [...filteredCart, {sku, name, price, qty}] };
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if(action.payload){
                throw new Error('action.payload missing in REMOVE Action')
            }

            const {sku} = action.payload;

            const filteredCart:CartItemType[] = state.cart.filter((item) => item.sku !== sku);

            return {...state, cart: [...filteredCart]}
        }
        case REDUCER_ACTION_TYPE.QUANTITY: {
            if(action.payload){
                throw new Error('action.payload missing in QUANTITY Action')
            }

            const {sku, qty} = action.payload;

            const itemExists:CartItemType | undefined = state.cart.find((item) => item.sku === sku);

            if(!itemExists){
                throw new Error("Item must exist in order to update quantity")
            }

            const updatedItem:CartItemType = {...itemExists, qty};

            const filteredCart:CartItemType[] = state.cart.filter((item) => item.sku !== sku);

            return {...state, cart:[...filteredCart, updatedItem]};
        }
        case REDUCER_ACTION_TYPE.SUBMIT: {
            return { ...state, cart: [] }
        }
        default:
            throw new Error("Error")
    }
}

const useCartContext = (initCartState: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState);   

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE;
    },[]);

    const totalItems: number= state.cart.reduce((previousValue, cartItem) => {
        return previousValue + cartItem.qty
    }, 0);

    const totalPrice = new Intl.NumberFormat('en-US', {style:'currency', currency: 'USD'}).format(
        state.cart.reduce((previousValue, cartItem) => {
            return previousValue + (cartItem.qty * cartItem.price)
        }, 0)
    );
}