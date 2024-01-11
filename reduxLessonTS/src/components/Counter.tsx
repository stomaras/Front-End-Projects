import classes from './Counter.module.css';
import { useAppSelector, useAppDispatch } from '../store';
import { useDispatch } from 'react-redux';
import { addCounter, decreaseCounter, addCounterBy5 } from '../store/counterSlice';

const Counter = () => {

  const counter = useAppSelector(state => state.counter.counter);
  const dispatch = useAppDispatch();

  const incrementHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addCounter())
  }
  const decrementHanlder = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(decreaseCounter())
  }

  const incrementHanlderBy5 = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addCounterBy5())
  }

  const toggleCounterHandler = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
