import classes from './CartButton.module.css';
import { toggle } from '../../store/ui-slice';
import { useAppDispatch, useAppSelector } from '../../store';

const CartButton = (props:any) => {
  const dispatch = useAppDispatch();

  const toggleCartHanlder = () => {
    dispatch(toggle())  
  }

  return (
    <button className={classes.button} onClick={toggleCartHanlder}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
