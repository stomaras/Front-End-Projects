import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UIState {
    cartIsVisible:boolean;
}

export const initialCartState:UIState = {
    cartIsVisible:false,
}

export const uiSlice = createSlice({
    name:'ui',
    initialState:initialCartState,
    reducers:{
        toggle:(state:UIState, action:PayloadAction) => {
            state.cartIsVisible = !state.cartIsVisible
        }
    }
});

export default uiSlice.reducer;
export const{toggle} = uiSlice.actions;