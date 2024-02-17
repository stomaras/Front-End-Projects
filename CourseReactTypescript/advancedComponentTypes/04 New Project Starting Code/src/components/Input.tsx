import React, { ComponentPropsWithoutRef } from 'react'

type InputProps = {
    label:string;
    id:string;
} & ComponentPropsWithoutRef<'input'>;

// ComponentPropsWithoutRef<InputProps>
// give us an object that contains all the default props of the standard built-in input element.
// and in this case, we use it with our own props object here.

const Input = ({label, id, ...props}:InputProps) => {
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props}/>
    </p>
  )
}

export default Input