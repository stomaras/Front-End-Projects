import React, { useState } from 'react'
import { Item } from '../models/models'

export interface SingleItemProps {
    item: Item;
    removeItem: (id:string) => void;
}

const SingleItem = (props: SingleItemProps) => {

    const {item, removeItem} = props;
    const [isChecked, setIsChecked] = useState(item.completed);

    const handleChecked = (e:React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked);
    }

  return (
    <div className='single-item'>
        <input type="checkbox" checked={isChecked} onChange={handleChecked} className='single-item__checkbox'/>
        <p style={{ 
                textDecoration: `${isChecked}` && 'line-through',
                textTransform: 'capitalize'
        }}
        className='single-item__p'
        >
            {item.name}
        </p>
        <button className='btn remove-btn' type='button' onClick={() => removeItem(item.id)}>
            delete
        </button>

    </div>
  )
}

export default SingleItem