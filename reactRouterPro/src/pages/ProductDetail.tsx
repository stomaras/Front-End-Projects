import React from 'react'
import { useParams } from 'react-router-dom'


export const ProductDetail = () => {
    const params = useParams();

    params.productId;
  return (
    <>
    <div>ProductDetail{params.productId}</div>
    
    </>
  )
}

export default ProductDetail