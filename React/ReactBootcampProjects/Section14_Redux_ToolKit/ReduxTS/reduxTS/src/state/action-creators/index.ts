import axios from "axios";
import { ActionType } from "../action-types";
import { initialState } from "../reducers/cartReducer";

export const getProducts = () => ({
    type:ActionType.GET_PRODUCTS,
    payload: initialState.cartItems,
});

export const clearCart = () => ({
    type:ActionType.CLEAR_CART,
    payload:[],
});

export const removeItem = (id:string) => ({
    type:ActionType.REMOVE,
    payload:id,
});

export const increaseItem = (id:string) => ({
    type:ActionType.INCREASE,
    payload:id,
});