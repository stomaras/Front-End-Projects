import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import cartItems from "../../cartItems";

const url = "https://www.couse-api.com/react-useReducer-cart-project"


const initialState = {
    cartItems: cartItems,
    amount:5,
    total:0,
    isLoading:true
};


export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
    return fetch(url).then(resp => resp.json()).catch((error) => console.log(error));
})


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
        },
        calculateTotals:(state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },   
    },
    extraReducers:(builder) => {
        builder.addCase(getCartItems.pending, (state) => {
            state.isLoading = true;
        }).addCase(getCartItems.fulfilled,(state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        }).addCase(getCartItems.rejected,(state) => {
            state.isLoading = false;
        })
    },
});

export const {clearCart, removeItems, increase, decrease, calculateTotals} = cartSlice.actions;

export default cartSlice.reducer;