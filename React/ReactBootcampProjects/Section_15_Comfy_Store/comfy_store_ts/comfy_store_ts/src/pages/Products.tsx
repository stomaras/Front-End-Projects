import React from 'react'
import Filters from '../components/Filters'
import { PaginationContainer, ProductsContainer } from '../components'
import { customFetch } from '../utils'

const url = '/products'
export const loader = async({params}) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  console.log(response);
  return {products,meta};
}

const Products = () => {
  return (
    <h1 className='text-4xl'>
      <Filters/>
      <ProductsContainer/>
      <PaginationContainer/>
    </h1>
  )
}

export default Products