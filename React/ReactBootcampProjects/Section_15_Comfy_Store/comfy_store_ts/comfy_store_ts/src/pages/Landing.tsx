import React from 'react'
import { Hero } from '../components'
import { customFetch } from '../utils'

const url = '/products?featured=true'

export const loader = async () => {
  const response = await customFetch(url);
  console.log(response);
  const products = response.data.data;
  console.log(products);
  return {products};
}

const Landing = () => {
  return (
    <>
        <Hero/>
    </>
  )
}

export default Landing