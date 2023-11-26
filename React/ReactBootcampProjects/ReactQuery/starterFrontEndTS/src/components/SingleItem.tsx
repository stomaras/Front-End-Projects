import React from 'react'
import { ITask } from '../models/models'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import customFetch from '../utils/utils';
import { useDeleteTask, useEditTask } from '../customHooks/reactQueryCustomHooks';

type SingleItemProps = {
    item: ITask;
}

const SingleItem = (props:SingleItemProps) => {
    const {item} = props;
    const queryClient = useQueryClient();
    
    const {editTask} = useEditTask();
    const {deleteTask, isLoading} = useDeleteTask();


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
        <input type="checkbox"  checked={item.isDone} onChange={() => editTask({taskId: item.id, isDone: !item.isDone})}/>
        <p style={{textTransform:'capitalize', textDecoration:handleTextDecoration(item.isDone)}}>
            {item.title}
        </p>
        <button className='btn remove-btn' type='button' disabled={isLoading} onClick={() => deleteTask(item.id)}>
            delete
        </button>
    </div>
  )
}

export default SingleItem