import {combineReducers} from "redux";
import reducer from "./cartReducer";
import reducerModal from "./modalReducer";
import { store } from "../store";


const reducers = combineReducers({
    cart:reducer,
    modal:reducerModal,
});

export default reducers;


export type RootState = ReturnType<typeof reducers>;
