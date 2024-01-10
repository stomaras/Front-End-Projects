import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserFromLocalStorage } from "../../utils/localStorage";
import { addUserToLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";

export interface User {
    name?:string;
    email:string;
    password:string;
    lastName?:string;
    location?:string;
    token?:string;
}

export interface UserState {
    isLoading:boolean;
    user:User | null;
    isSidebarOpen:boolean;
}

const initialState:UserState = {
    isLoading:false,
    user:null,
    isSidebarOpen:false,
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
type AsyncThunkConfig = {
    state: RootState
}
export const updateUser = createAsyncThunk('user/updateUser',async(user:User, thunkAPI) => {
    try {
        const resp = await customFetch.patch('/auth/updateUser', user,{
            headers: {
                authorization:`Bearer ${thunkAPI.getState().user.user.token}`
            }
        })
        return resp.data;
    }catch(error){

    }
})

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        toggleSidebar: (state:UserState) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        logoutUser:(state:UserState) => {
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
        }
    },
    extraReducers:(builder) => {
        builder.addCase(registerUser.pending, (state:UserState) => {
            state.isLoading =true;
        });
        builder.addCase(registerUser.fulfilled, (state:UserState, action:PayloadAction<User>) => {
            const {user} = action.payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
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
            addUserToLocalStorage(user);
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
export const {toggleSidebar, logoutUser} = userSlice.actions;
export const userSelector = (state:RootState) => state.user;
