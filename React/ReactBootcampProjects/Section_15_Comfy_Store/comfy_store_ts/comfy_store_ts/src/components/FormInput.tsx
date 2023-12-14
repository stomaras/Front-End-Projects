import React from 'react'


export interface FormInputProps {
    label:string;
    name:string;
    type:string;
    defaultValue:string;
    size:string;
}

const FormInput = ({label, name, type, defaultValue, size}:FormInputProps) => {
  return (
    <div className='form-control'>
        <label className='label'>
            <span className='label-text capitalize'>{label}</span>
        </label>
        <input 
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder='Type Here'
        className={`input input-bordered input-${size}`}  
        />
    </div>
  )
}

export default FormInput