import React, { useState } from 'react'

const Form = () => {
    const [newItemName, setNewItemName] = useState('');

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleChangeItem = (event:React.ChangeEvent<HTMLInputElement>) => {
        setNewItemName(event.target.value);
    }

  return (
    <form onSubmit={handleSubmit}>
        <h4>task bud</h4>
        <div className="form-control">
            <input type="text" className='form-input' value={newItemName} onChange={handleChangeItem} />
            <button type='submit' className='btn'>add task</button>
        </div>
    </form>
  )
}

export default Form