import React from 'react'
import Filters from '../components/Filters'
import { PaginationContainer, ProductsContainer } from '../components'

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