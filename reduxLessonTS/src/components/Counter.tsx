import classes from './Counter.module.css';
import { useAppSelector, useAppDispatch } from '../store';
import { useDispatch } from 'react-redux';
import { addCounter, decreaseCounter } from '../store/counterSlice';

const Counter = () => {

  const counter = useAppSelector(state => state.counter.counter);
  const dispatch = useAppDispatch();

  const incrementHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(addCounter())
  }
  const decrementHanlder = (e:React.MouseEvent<HTMLButtonElement>) => {
    dispatch(decreaseCounter())
  }

  const toggleCounterHandler = () => {};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHanlder}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
