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
                ...state,
                cartItems:initialState.cartItems,
                amount:initialState.amount,
                total:initialState.total,
                isLoading:false,
            }
        case ActionType.CLEAR_CART:
            initialState.amount = 0;
            initialState.total = 0;
            initialState.cartItems = [];
            return {
                ...state,
                cartItems:initialState.cartItems,
                amount:initialState.amount,
                total:initialState.total
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
                        console.log(initialState.cartItems[i].amount);
                    }
                }
                initialState.amount = 0;
                for(let i =0; i<= initialState.cartItems.length -1; i++){
                    initialState.amount += initialState.cartItems[i].amount;
                    initialState.total = initialState.amount * Number(initialState.cartItems[i].price)

                }

                return {
                    ...state,
                    amount:initialState.amount,
                    total:initialState.total,
                }
        case ActionType.DECREASE:
            for (let i = 0; i<= initialState.cartItems.length -1; i++){
                if(initialState.cartItems[i].id === action.payload){
                    initialState.cartItems[i].amount--;
                }
            }
            initialState.amount = 0;
                for(let i =0; i<= initialState.cartItems.length -1; i++){
                    initialState.amount += initialState.cartItems[i].amount;
                    initialState.total = initialState.amount * Number(initialState.cartItems[i].price)
            }
            return {
                cartItems:initialState.cartItems,
                amount:initialState.amount,
                total:initialState.total,
                isLoading:false,
            }
        case ActionType.CALCULATE_TOTALS:
            let amount = 0;
            let total = 0;
            for (let i = 0; i<= initialState.cartItems.length -1; i++){
                console.log(initialState.cartItems[i].amount);
                amount += initialState.cartItems[i].amount;
                total += initialState.cartItems[i].amount * Number(initialState.cartItems[i].price);
            }    
            initialState.amount = amount;
            initialState.total = total;
            return {
                ...state,
                amount:initialState.amount,
                total:initialState.total,
            }
        default:
            return state;
    }
};

export default reducer;