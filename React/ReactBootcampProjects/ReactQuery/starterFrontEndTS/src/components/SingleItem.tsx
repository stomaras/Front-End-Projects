import React from 'react'
import { ITask } from '../models/models'

type SingleItemProps = {
    item: ITask;
}

const SingleItem = (props:SingleItemProps) => {
    const {item} = props;

    const handleChangeEditTask = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log("edit task");
    }

    const handleTextDecoration = (isDone:boolean) => {
        if(isDone){
            return `line-through`;
        }
    }

    const handleDeleteTask = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log("delete task");
    }

  return (
    <div className='single-item'>
        <input type="checkbox"  checked={item.isDone} onChange={handleChangeEditTask}/>
        <p style={{textTransform:'capitalize', textDecoration:handleTextDecoration(item.isDone)}}>
            {item.title}
        </p>
        <button className='btn remove-btn' type='button' onClick={handleDeleteTask}>
            delete
        </button>
    </div>
  )
}

export default SingleItem