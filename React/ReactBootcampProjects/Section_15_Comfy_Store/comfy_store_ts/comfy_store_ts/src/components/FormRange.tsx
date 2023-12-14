import React from 'react'
import { useState } from 'react';



export interface FormRangeProps {
    label:string;
    name:string;
    size:string;
}

const FormRange = ({label, name, size}:FormRangeProps) => {

    const step = 1000
    const maxPrice = 100000
    const [selectedPrice, setSelectedPrice] = useState(maxPrice);

    const handleSelectedPrice = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPrice(parseInt(e.target.value));
    }

  return (
    <div className='form-control'>
        <label htmlFor={name} className='label cursor-pointer'>
            <span className='label-text capitalize'>{label}</span>
            <span>${selectedPrice}</span>
        </label>
        <input type="range" name={name} min={0} max={maxPrice} step={step} value={selectedPrice} onChange={handleSelectedPrice} className={`range range-primary ${size}`} />
        <div className='w-full flex justify-between text-xs px-2 mt-2'>
            <span className='font-bold text-md'>0</span>
            <span className='font-bold text-md'>Max: {maxPrice}</span>
        </div>
    </div>
  )
}

export default FormRange