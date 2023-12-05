import axios from "axios";
import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import {Action} from "../actions/index";
import { initialState } from "../reducers/cartReducer";

export const getProducts = () => ({
    type:ActionType.GET_PRODUCTS,
    products: initialState.cartItems,
})

export const clearCart = () => ({
    type:ActionType.CLEAR_CART,
    products:[],
})

