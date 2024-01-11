import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Item } from "../models/models";

export interface CartState {
    items:Item[],
    totalQuantity:number,
    changed:boolean,
}

export const initialCartState:CartState = {
    items:[],
    totalQuantity:0,
    changed:false,
}

export const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        addItemToCart:(state:CartState, action:PayloadAction<Item>) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.itemId == newItem.itemId);
            state.totalQuantity++;
            if(!existingItem) {
                state.items.push({
                    itemId:newItem.itemId,
                    price:newItem.price, 
                    quantity:1, 
                    totalPrice:newItem.price,
                    title:newItem.title,
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart:(state:CartState, action:PayloadAction<string>) => {
            const id = action.payload;
            const existingItem = state.items.find((item)=> item.itemId === id);
            state.totalQuantity--;
            state.changed = true;
            if(existingItem){
                if(existingItem.quantity === 1){
                    state.items = state.items.filter((item) => item.itemId !== id);
                }else {
                    existingItem.quantity--;
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                }
            }
            
        }
    }
})

export const {addItemToCart,removeItemFromCart} = cartSlice.actions;
export default cartSlice;