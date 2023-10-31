import React from 'react'
import { Item } from '../models/models'
import SingleItem from './SingleItem';

export interface ItemsProps {
    items: Item[];
    removeItem: (itemId:any) => void;
    editItem: (itemId:any) => any;
}

const Items = (props: ItemsProps) => {

    const {items, removeItem, editItem} = props;

  return (
    <div className='items'>
        {items.map((item) => {
            return <SingleItem key={item.id} item={item} removeItem={removeItem} editItem={editItem}/>
        })}

    </div>
  )
}

export default Items