import React from 'react'


export interface FormInputProps {
    label:string;
    name:string;
    type:string;
    defaultValue:string;
}

const FormInput = ({label, name, type, defaultValue}:FormInputProps) => {
  return (
    <div className='form-control'>
        <label className='label'>
            <span className='label-text'>{label}</span>
        </label>
        <input 
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder='Type Here'
        className='input input-bordered'  
        />
    </div>
  )
}

export default FormInput