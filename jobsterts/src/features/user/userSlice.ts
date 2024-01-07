import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface UserState {
    isLoading:boolean;
    user:null;
}

const initialState:UserState = {
    isLoading:false,
    user:null,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        
    }
})

export default userSlice.reducer;