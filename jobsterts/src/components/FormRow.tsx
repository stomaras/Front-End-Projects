import React from 'react'

export interface FormRowProps {
    type:string;
    name:string;
    value:string;
    handleChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
    labelText?:string;
}

const FormRow = ({type, name, value, handleChange, labelText}:FormRowProps) => {
  return (
    <div className='form-row'>
        <label htmlFor={name} className='form-label'>{labelText || name}</label>
        <input type={type} name={name} value={value} onChange={handleChange} className='form-input' />
    </div>
  )
}

export default FormRow