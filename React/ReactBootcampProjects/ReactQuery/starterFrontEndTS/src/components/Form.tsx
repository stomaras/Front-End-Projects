import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import customFetch from '../utils/utils';
import { toast } from 'react-toastify';
import { useCreateTask } from '../customHooks/reactQueryCustomHooks';


const Form = () => {
    const [newItemName, setNewItemName] = useState('');
    const {isSuccess, createTask} = useCreateTask()

    const handleChangeItem = (event:React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(event.target.value);
    }

  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(newItemName, {
      onSuccess:() => {
        setNewItemName('');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
        <h4>task bud</h4>
        <div className="form-control">
            <input type="text" className='form-input' value={newItemName} onChange={handleChangeItem} />
            <button type='submit' className='btn' disabled={isSuccess}>add task</button>
        </div>
    </form>
  )
}

export default Form