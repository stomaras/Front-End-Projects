import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react'
import { forwardRef } from 'react';

type InputProps = {
    label:string;
    id:string;
} & ComponentPropsWithoutRef<'input'>;

// ComponentPropsWithoutRef<InputProps>
// give us an object that contains all the default props of the standard built-in input element.
// and in this case, we use it with our own props object here.
// the first type refer to the value that the ref will manage the second generic type you pass to forwardRef will refer 
// to the type of props the wrapped function will receive.
const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, id,...props }:InputProps, ref){
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref}/>
    </p>
  )
});

export default Input