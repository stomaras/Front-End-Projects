import React from 'react'
import { Item } from './models/models'

export interface SingleItemProps {
    key: string
    item: Item
    removeItem(id:number):void
}

const SingleItem = (props:SingleItemProps) => {
  return (
    <h2>SingleItem</h2>
  )
}

export default SingleItem