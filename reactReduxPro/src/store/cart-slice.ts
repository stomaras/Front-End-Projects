import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Item } from "../models/models";
export interface CartState {
    items:Item[],
    totalQuantity:number,
}


export const initialCartState:CartState = {
    items:[],
    totalQuantity:0,
}


export const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        addItemToCart:(state:CartState, action:PayloadAction<Item>) => {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.itemId == newItem.itemId)
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
        }
    }
})