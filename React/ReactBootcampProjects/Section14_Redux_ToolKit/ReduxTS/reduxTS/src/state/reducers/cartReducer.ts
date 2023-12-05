import { IProduct } from "../../models/models";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import cartItems from "../../data/data";

export interface CartState {
    cartItems:IProduct[],
    amount:number;
    total:number;
    isLoading:boolean;
}

export const initialState :CartState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isLoading: false
}

const reducer = (state:CartState = initialState, action:Action):CartState => {
    switch(action.type){
        case ActionType.GET_PRODUCTS:
            return {
                cartItems:initialState.cartItems,
                amount:initialState.amount,
                total:initialState.total,
                isLoading:initialState.isLoading,
            }
        case ActionType.CLEAR_CART:
            return {
                cartItems:[],
                amount:0,
                total:0,
                isLoading:false
            }
        default:
            return state;
    }
};

export default reducer;