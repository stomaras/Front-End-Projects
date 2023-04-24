import { log } from 'console';
import React, { useState } from 'react'
import { toast } from "react-toastify";


interface FormProps {
    addItem(name:string): void 
} 

const Form = ({addItem}: FormProps) => {
    const [newItemName, setNewItemName] = useState('')

    const changeItemName = (event: React.FormEvent<HTMLInputElement>) => {
        setNewItemName((event.target as HTMLInputElement).value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!newItemName) {
            toast.error("please provide a value")
            return;
        }
        addItem(newItemName)
    }

  return (
    <form onSubmit={handleSubmit}>
          <h4>grocery bud</h4>
          <div className="form-control">
              <input type="text" className='form-input' value={newItemName} onChange={changeItemName} />
              <button type='submit' className='btn'>Add Item</button>
          </div>
    </form>
  )
}

export default Form