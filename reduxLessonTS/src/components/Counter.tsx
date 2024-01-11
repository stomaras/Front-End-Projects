import classes from './Counter.module.css';
import { useAppSelector, useAppDispatch } from '../store';
import { useDispatch } from 'react-redux';
import { addCounter, decreaseCounter, addCounterBy5, toggleCounter } from '../store/counterSlice';

const Counter = () => {

  const counter = useAppSelector(state => state.counter.counter);
  const show = useAppSelector(state => state.counter.showCounter)
  const dispatch = useAppDispatch();

  const incrementHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addCounter(1))
  }
  const decrementHanlder = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(decreaseCounter(1))
  }

  const incrementHanlderBy5 = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addCounterBy5(5))
  }

  const toggleCounterHandler = () => {
    dispatch(toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>} 
       <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHanlder}>Decrement</button>
        <button onClick={incrementHanlderBy5}>Increment By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
