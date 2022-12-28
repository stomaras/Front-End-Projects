import React from "react";
import classes from "./Counter.module.css";
// import {useDispatch, useSelector} from "react-redux";
import {incrementCounter, decrementCounter, toggleCounter} from "../state/action-creators";
import { useAppSelector } from "../state/store";
import { useDispatch } from "react-redux";
import { counterActions } from "../state/actions/index";


export const Counter = () => {  
  const dispatch: any = useDispatch();
  const count = useAppSelector((state:any) => state.counter.counter);
  const showCounter = useAppSelector((state:any) => state.counter.showCounter);
  // const reduxState: any = useSelector((state) => state);
  // const {CounterState: {counter}} = reduxState
  // const {CounterState: {showCounter}} = reduxState
  

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const handleIncrementCounter = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrementCounter = () => {
    dispatch(counterActions.decrement());
  }

  const incrementHandler = () => {
    dispatch(counterActions.increase(5));// {type: SOME_UNIQUE_IDENTIFIER, payload:5}
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div data-testid="countValue" className={classes.value}>{count}</div>}
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
