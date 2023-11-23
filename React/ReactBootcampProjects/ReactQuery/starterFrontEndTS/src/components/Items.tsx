import React from 'react'
import { ITask } from '../models/models'
import SingleItem from './SingleItem';

type ItemProps = {
    items:ITask[];
}

const Items = (props:ItemProps) => {

    const {items} = props

  return (
    <div className='items'>
        {items.map((item) => {
            return <SingleItem item={item}/>
        })}
    </div>
  )
}

export default Items