import React, { useState } from 'react'

export interface FormProps {
    addPerson: (name:string) => void;
}

const Form = (props:FormProps) => {

    const {addPerson} = props

    const [name, setName] = useState('');
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!name) {
            alert('Please provide Name Value');
            return;
        }
        addPerson(name);
        setName('');
    }
  return (
    <form action="" className="form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="name" className="form-label">name</label>
                <input type="text" name='name' id='name' className="form-input" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <button className="btn btn-block" type='submit'>submit</button>
        </form>
  )
}

export default Form