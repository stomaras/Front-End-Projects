import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
    isAuthenticated:boolean;
}

const intialAuthState :AuthState= {
    isAuthenticated:false,
};

export const authSlice = createSlice({
    name:'authentication',
    initialState:intialAuthState,
    reducers:{
        login:(state:AuthState, action:PayloadAction) => {
            state.isAuthenticated = true;
        },
        logout:(state:AuthState, action:PayloadAction) => {
            state.isAuthenticated = false;
        }
    }
});

export default authSlice.reducer;
export const {login, logout} = authSlice.actions

