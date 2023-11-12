import { CLEAR_CART, INCREASE, DECREASE, REMOVE, DISPLAY_ITEMS, LOADING } from "../actions/actions";


const reducer = (state, action) => {
    if(action.type === CLEAR_CART) {
        return {...state, cart:new Map()};
    }
    if(action.type === REMOVE) {
        const newCart = new Map(state.cart);
        newCart.delete(action.payload.id);
        return {...state, cart: newCart};
    }
    if(action.type === INCREASE) {
        const newCart = new Map(state.cart);
        const itemId = action.payload.id;
        console.log(itemId);
        console.log(newCart);
        const item = newCart.get(itemId);
        console.log(item);
        console.log("new item", +item);
        const newItem = {...item, amount: item.amount + 1};
        console.log("new item " + newItem);
        newCart.set(itemId, newItem);
        console.log("new cart" + newCart);
        console.log(newCart);
        return {...state, cart: newCart};
    }
    return;
}

export default reducer;