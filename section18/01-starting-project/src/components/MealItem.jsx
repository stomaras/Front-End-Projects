import React, { useContext } from 'react'
import {currencyFormatter} from "../util/formatting";
import Button from './UI/Button';
import CartContext from '../store/CartContext.jsx';

const MealItem = ({meal}) => {

  const cartCTX = useContext(CartContext);

  const handleAddMealToCart = () => {
    cartCTX.addItem(meal);
  }


  return (
    <li className='meal-item'>
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
                <p className='meal-item-description'>{meal.description}</p>
            </div>
            <p className='meal-item-actions'>
                <button onClick={handleAddMealToCart}>Add to Cart</button>
            </p>
        </article>
    </li>
  )
}

export default MealItem