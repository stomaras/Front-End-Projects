import React from 'react'

export interface FormCheckBoxProps {
    label:string;
    name:string;
    defaultValue:string;
    size:string;
}

const FormCheckbox = ({label,name, defaultValue,size}:FormCheckBoxProps) => {
  return (
    <div className='form-control items-center'>
        <label htmlFor={name} className="label cursor-pointer">
            <span className='label-text capitalize'>
                {label}
            </span>
            <input type="checkbox" name={name} className={`checkbox checkbox-primary ${size}`} />
        </label>
    </div>
  )
}

export default FormCheckbox