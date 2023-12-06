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
                isLoading:false,
            }
        case ActionType.CLEAR_CART:
            return {
                cartItems:[],
                amount:0,
                total:0,
                isLoading:false
            }
        case ActionType.REMOVE:
            const itemId = action.payload;
            initialState.cartItems= initialState.cartItems.filter((item) => item.id !== itemId);
            return {
                cartItems:initialState.cartItems,
                amount:initialState.amount,
                total:initialState.total,
                isLoading:false
            }
        case ActionType.INCREASE:
               for (let i = 0; i<= initialState.cartItems.length -1; i++){
                    if(initialState.cartItems[i].id === action.payload){
                        initialState.cartItems[i].amount++;
                    }
                }
                return {
                    cartItems:initialState.cartItems,
                    amount:initialState.amount,
                    total:initialState.total,
                    isLoading:false,
                }
            
        default:
            return state;
    }
};

export default reducer;