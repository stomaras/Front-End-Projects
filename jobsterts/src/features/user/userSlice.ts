import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";

export interface User {
    name?:string;
    email:string;
    password:string
}

export interface UserState {
    isLoading:boolean;
    user:User | null;
}

const initialState:UserState = {
    isLoading:false,
    user:null,
}

// action creators 

export const registerUser = createAsyncThunk('user/registerUser',async(user:User, thunkAPI) => {
        try {
            const resp = await customFetch.post('auth/register', user)
            return resp.data;
        }catch(error:any) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
);

export const loginUser = createAsyncThunk('user/loginUser', async(user:User, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/login', user)
            return resp.data;
        }catch(error:any){
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
);

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(registerUser.pending, (state:UserState) => {
            state.isLoading =true;
        });
        builder.addCase(registerUser.fulfilled, (state:UserState, action:PayloadAction<User>) => {
            const {user} = action.payload;
            state.isLoading = false;
            state.user = user;
            toast.success(`Hello there ${user.name}`)
        })
        builder.addCase(registerUser.rejected, (state:UserState, action:any) => {
            state.isLoading = false;
            state.user = null;
            toast.error(action.payload)
        })
        builder.addCase(loginUser.pending, (state:UserState) => {
            state.isLoading =true;
        });
        builder.addCase(loginUser.fulfilled, (state:UserState, action:PayloadAction<User>) => {
            const {user} = action.payload;
            state.isLoading = false;
            state.user = user;
            toast.success(`Welcome back ${user.name}`)
        })
        builder.addCase(loginUser.rejected, (state:UserState, action:any) => {
            state.isLoading = false;
            state.user = null;
            toast.error(action.payload)
        })
    }
})

export default userSlice.reducer;
export const userSelector = (state:RootState) => state.user;
