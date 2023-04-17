import React from 'react'
import { Item } from './models/models'
import SingleItem from './SingleItem'

export interface ItemsProps {
    items: Item[]
    removeItem(itemId:string):void
}

const Items = (props: ItemsProps) => {
  return (
      <div className='items'>
          {
              props.items.map((item) => {
                  return <SingleItem key={item.id} item={item} removeItem={props.removeItem}></SingleItem>
              })
          }

    </div>
  )
}

export default Items