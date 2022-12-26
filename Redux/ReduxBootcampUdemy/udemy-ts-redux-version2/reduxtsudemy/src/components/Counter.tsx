import React from "react";
import classes from "./Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {incrementCounter, decrementCounter, toggleCounter} from "../state/action-creators";

export const Counter = () => {  
  const dispatch: any = useDispatch();
  
  const reduxState: any = useSelector((state) => state);
  const {CounterState: {counter}} = reduxState
  const {CounterState: {showCounter}} = reduxState
  

  const toggleCounterHandler = () => {
    dispatch(toggleCounter(showCounter));
  };

  const handleIncrementCounter = () => {
    dispatch(incrementCounter(1));
  };
  const handleDecrementCounter = () => {
    dispatch(decrementCounter(1));
  }

  const incrementHandler = () => {
    dispatch(incrementCounter(5));
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrementCounter}>Increment</button>
        <button onClick={incrementHandler}>Increase by 5</button>
        <button onClick={handleDecrementCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
