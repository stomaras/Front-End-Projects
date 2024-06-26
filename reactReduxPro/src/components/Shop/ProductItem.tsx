import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useAppDispatch, useAppSelector } from '../../store';
import { addItemToCart, removeItemFromCart } from '../../store/cart-slice';
import { Item } from '../../models/models';

export interface ProductItemProps {
  id:string;
  title:string;
  price:number;
  description:string;
}

const ProductItem = (props:ProductItemProps) => {
  const { id, title, price, description } = props;

  const dispatch = useAppDispatch();

  const addToCartHanlder = () => {
    
    dispatch(addItemToCart({
      itemId: id,
      title: title,
      price: price,
      quantity: 0,
      totalPrice: 0
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHanlder}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
