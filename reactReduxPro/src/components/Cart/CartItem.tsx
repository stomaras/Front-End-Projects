import classes from './CartItem.module.css';
import { useAppDispatch } from '../../store';
import { removeItemFromCart, addItemToCart } from '../../store/cart-slice';

const CartItem = (props:any) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useAppDispatch();

  const removeItemHanlder = () => {
    dispatch(removeItemFromCart(id));
  }

  const addItemHanlder = () => {
    dispatch(addItemToCart({
      title: title,
      itemId: id,
      price: price,
      quantity: quantity,
      totalPrice: total,
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHanlder}>-</button>
          <button onClick={addItemHanlder}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
