import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import customFetch from '../utils/utils';
import { toast } from 'react-toastify';


const Form = () => {
    const [newItemName, setNewItemName] = useState('');
    const queryClient = useQueryClient();

    const handleChangeItem = (event:React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(event.target.value);
    }


  const {mutate:createTask, isSuccess} = useMutation({
    mutationFn:(taskTitle:string) => customFetch.post('/',{title: taskTitle}),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey:['tasks']}),
        toast.success('task added')
        setNewItemName('');
    },
    onError:(error:any) => {
        toast.error(error.response.data.msg)
    },
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