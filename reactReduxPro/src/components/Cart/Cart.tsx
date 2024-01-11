import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useAppSelector } from '../../store';



const Cart = (props:any) => {

  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.map((cartItem) => {
            return (
              <CartItem
                key={cartItem.itemId}
                item={{ 
                  id:cartItem.itemId,
                  title: cartItem.title, 
                  quantity: cartItem.quantity, 
                  total: cartItem.totalPrice, 
                  price: cartItem.price 
                }}
              />
            )
          })
        }

      </ul>
    </Card>
  );
};

export default Cart;
