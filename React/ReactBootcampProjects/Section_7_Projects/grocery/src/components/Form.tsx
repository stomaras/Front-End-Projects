import React, { useState } from 'react'

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
        if(!newItemName) return;
        addItem(newItemName);
        setNewItemName('');
    };

  return (
    <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
            <input type="text" className='form-input' value={newItemName} onChange={handleChangeItem}/>
            <button type='submit' className='btn'>
                add item
            </button>
        </div>
    </form>
  )
}

export default Form