import React from 'react'
import { Link } from 'react-router-dom'
import ProductDetail from './ProductDetail'

const PRODUCTS = [
    {id:'1', title:'Product 1'},
    {id:'2', title:'Product 2'},
    {id:'3', title:'Product 3'},
]

const Products = () => {
  return (
    <>
        <div>Products Page</div>
        <ul>
            {PRODUCTS.map((prod) => {
                return <li>
                    <Link to={`/products/${prod.id}`}>{prod.title}</Link>
                </li>
            })}
        </ul>
    </>
  )
}

export default Products