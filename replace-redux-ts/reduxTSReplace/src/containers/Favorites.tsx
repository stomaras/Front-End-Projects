import React from 'react'

import { useAppSelector, useAppDispatch } from '../store';
import FavoriteItem from '../components/Favorites/FavoriteItem';

const Favorites = () => {
  const favoritesProducts = useAppSelector(state => state.shop.products.filter((product) => product.isFavorite));
  let content = <p className='placeholder'>Go to favorites yet!</p>;
  if(favoritesProducts.length > 0){
    content = (
      <ul className='products-list'>
        {favoritesProducts.map((prod) => {
          return (
            <FavoriteItem title={prod.title} description={prod.description}            
            />
          )
        })}
      </ul>
    )
  }
  return (
    content
  )
}

export default Favorites