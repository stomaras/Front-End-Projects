import { Item, ItemState } from "../models/models";
import { CLEAR_CART, INCREASE, DECREASE, LOADING, DISPLAY_ITEMS, REMOVE, CartActions } from "../actions/actions";


const reducer = (state:ItemState, action:CartActions) => {
    const {type, payload} = action
    if(type === CLEAR_CART){
        return {...state, cart:new Map<string,Item>()}
    }
    return state;
}


export default reducer