import React from 'react'
import { Item } from '../models/models'
import SingleItem from './SingleItem';

export interface ItemsProps {
    items: Item[];
    removeItem: (itemId:any) => void;
}

const Items = (props: ItemsProps) => {

    const {items, removeItem} = props;

  return (
    <div className='items'>
        {items.map((item) => {
            return <SingleItem item={item} removeItem={removeItem}/>
        })}

    </div>
  )
}

export default Items