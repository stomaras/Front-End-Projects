import { CLEAR_CART, INCREASE, DECREASE, REMOVE, DISPLAY_ITEMS, LOADING } from "../actions/actions";


const reducer = (state, action) => {
    if(action.type === CLEAR_CART) {
        return {...state, cart:new Map()};
    }
    if(action.type === REMOVE) {
        console.log("reducer");
        const newCart = new Map(state.cart);
        newCart.delete(action.payload.id);
        return {...state, cart: newCart};
    }
    return;
}

export default reducer;