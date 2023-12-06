import axios from "axios";
import { ActionType } from "../action-types";
import { ActionTypeModal } from "../action-types";
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

export const decreaseItem = (id:string) => ({
    type:ActionType.DECREASE,
    payload:id,
});

export const calculateTotals = () => ({
    type:ActionType.CALCULATE_TOTALS
})

/*************************************Action Creators for Modal ************************************/

export const cancel = () => ({
    type:ActionTypeModal.CANCEL
});

export const openModal = () => ({
    type:ActionTypeModal.OPEN_MODAL
})