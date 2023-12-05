import {combineReducers} from "redux";
import reducer from "./cartReducer";
import { store } from "../store";


const reducers = combineReducers({
    cart:reducer,
});

export default reducers;


export type RootState = ReturnType<typeof reducers>;
