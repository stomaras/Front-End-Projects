import {createStore} from "redux";
import allReducers from "../reducers/combineReducer";

const store = createStore(
    allReducers
);

export default store;