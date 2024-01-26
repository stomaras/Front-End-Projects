import React from 'react'
import { useSelector } from 'react-redux'

import ProductItem from '../components/Products/ProductItem'
import "./Products.css";
import { RootState } from '../store';
import { useAppSelector, useAppDispatch } from '../store';

const Products = () => {
    const productList = useAppSelector(state => state.shop.products);
    console.log(productList);
    
  return (
    <ul className='products-list'>
        {productList.map((product) => {
            return (
                <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    isFav={product.isFavorite}
                />
            )
        })}
    </ul>
  )
}

export default Products