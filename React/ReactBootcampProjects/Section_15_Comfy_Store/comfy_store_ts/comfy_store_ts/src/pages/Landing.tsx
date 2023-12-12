import React from 'react'
import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../utils'
import { IProduct } from '../models/models'

const url = '/products?featured=true'

export const loader = async ()=> {
  const response = await customFetch(url);
  const products:IProduct[] = response.data.data;
  return {products};
}

const Landing = () => {
  return (
    <>
        <Hero/>
        <FeaturedProducts/>
    </>
  )
}

export default Landing