// import counter from "../reducers/counterReducer";
// import {combineReducers} from "redux";
import React from "react";
import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
        counter: counterReducer,
        auth: authReducer
});

export {rootReducer}