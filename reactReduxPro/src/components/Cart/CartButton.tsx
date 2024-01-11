import classes from './CartButton.module.css';
import { toggle } from '../../store/ui-slice';
import { useAppDispatch, useAppSelector } from '../../store';

const CartButton = (props:any) => {
  const dispatch = useAppDispatch();
  const cartQunatity = useAppSelector((state) => state.cart.totalQuantity)

  const toggleCartHanlder = () => {
    dispatch(toggle())  
  }

  return (
    <button className={classes.button} onClick={toggleCartHanlder}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQunatity}</span>
    </button>
  );
};

export default CartButton;
