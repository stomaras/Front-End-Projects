import React from 'react'
import { ITask } from '../models/models'
import SingleItem from './SingleItem';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/utils';
import { useFetchTasks } from '../customHooks/reactQueryCustomHooks';

type ItemProps = {
    items:ITask[];
}

const Items = (props:ItemProps) => {

    const {isLoading, isError, data, error} = useFetchTasks()

    if(isLoading){
      return <p style={{marginTop:'1rem'}}>Loading ...</p>
    }

    // if(isError){
    //   return <p style={{marginTop:'1rem'}}>there was an error...</p>
    // }

    if(error){
      return <p style={{marginTop:'1rem'}}>{error.message}</p>
    }


    const {items} = props

  return (
    <div className='items'>
        {data.taskList.map((item:any) => {
            return <SingleItem key={item.id} item={item}/>
        })}
    </div>
  )
}

export default Items