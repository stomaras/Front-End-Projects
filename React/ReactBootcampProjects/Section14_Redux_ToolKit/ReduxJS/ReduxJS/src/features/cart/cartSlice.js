import {createSlice} from "@reduxjs/toolkit"
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount:5,
    total:0,
    isLoading:true
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state)=> {
            state.cartItems = [];
        },
        removeItems :(state,action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase :(state, action) => {
            const itemId = action.payload
            const cartItem = state.cartItems.find((item) => item.id === itemId);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId);
            cartItem.amount = cartItem.amount - 1;
        }   
    }
});

export const {clearCart, removeItems, increase, decrease} = cartSlice.actions;

export default cartSlice.reducer;