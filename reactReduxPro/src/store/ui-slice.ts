import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Notify } from "../models/models";

export interface UIState {
    cartIsVisible:boolean;
    notification:Notify | null;
}

export const initialCartState:UIState = {
    cartIsVisible:false,
    notification: null
}

export const uiSlice = createSlice({
    name:'ui',
    initialState:initialCartState,
    reducers:{
        toggle:(state:UIState, action:PayloadAction) => {
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification:(state:UIState, action:PayloadAction<Notify>) => {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export default uiSlice.reducer;
export const{toggle, showNotification} = uiSlice.actions;