import React, { useState } from 'react'
import {toast} from "react-toastify";

export interface FormProps {
    addItem:(itemName:string) => void;
}

const Form = (props: FormProps) => {
    const [newItemName, setNewItemName] = useState('');
    const {addItem} = props

    const handleChangeItem = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(e.target.value);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!newItemName) {
            toast.error('please provide value');
            return;
        } 
        addItem(newItemName);
        setNewItemName('');
    };

  return (
    <form onSubmit={handleSubmit} className='form'>
        <h4 className='form__header'>Grocery Bud</h4>
        <div className="form-control">
            <input type="text" className='form-input' value={newItemName} onChange={handleChangeItem}/>
            <button type='submit' className='btn-add'>
                Add item
            </button>
        </div>
    </form>
  )
}

export default Form