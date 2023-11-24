import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import customFetch from '../utils/utils';

const Form = () => {
    const [newItemName, setNewItemName] = useState('');


    const handleChangeItem = (event:React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(event.target.value);
    }


  const {mutate:createTask, isSuccess} = useMutation({
    mutationFn:(taskTitle:string) => customFetch.post('/',{title: taskTitle}),
  })

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(newItemName);
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