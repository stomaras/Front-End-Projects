import React from 'react'
import { ITask } from '../models/models'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import customFetch from '../utils/utils';

type SingleItemProps = {
    item: ITask;
}

const SingleItem = (props:SingleItemProps) => {
    const {item} = props;
    const queryClient = useQueryClient();
    const {mutate:editTask} = useMutation({
        mutationFn:({taskId, isDone}:any) => {
            return customFetch.patch(`/${taskId}`, { isDone })
        },
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['tasks']})
        }
    })
    
    const {mutate:deleteTask, isLoading} = useMutation({
        mutationFn:(taskId:string) => {
            return customFetch.delete(`/${taskId}`)
        },
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['tasks']})
        }
    })



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