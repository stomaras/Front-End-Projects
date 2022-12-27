import {createSlice, configureStore} from '@reduxjs/toolkit';

export interface AuthState {
    isAuth: boolean;
}

export const initialAuthState: AuthState = {
    isAuth: false,
};

export const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers:{
        login(state){
            state.isAuth = true;
        },
        logout(state){
            state.isAuth = false;
        }
    }
});

export default authSlice.reducer;


