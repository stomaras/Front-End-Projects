import React, { useState } from 'react'
import { Item } from './models/models'

export interface SingleItemProps {
    key: string
    item: Item
    removeItem(id: string): void
    editItem(id:string): void
}

const SingleItem = (props: SingleItemProps) => {
   // const [isChecked, setIsChecked] = useState(props.item.completed);

    const handleIsChecked = () => {
        props.editItem(props.item.id)
    }

    const handleRemoveItem = () => {
        props.removeItem(props.item.id)
    }
  return (
      <div className='single-item'>
          <input type="checkbox" checked={props.item.completed} onChange={handleIsChecked} />
          <p style={{
              textTransform: 'capitalize',
          }}
          >
              {props.item.name}
          </p>
          <button className='btn remove-btn' type='button' onClick={handleRemoveItem}>Delete</button>
    </div>
  )
}

export default SingleItem