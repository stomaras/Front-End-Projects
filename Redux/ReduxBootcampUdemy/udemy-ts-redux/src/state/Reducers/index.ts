import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";

const reducers = combineReducers({
  repositories: CounterReducer,
});

export default reducers;
