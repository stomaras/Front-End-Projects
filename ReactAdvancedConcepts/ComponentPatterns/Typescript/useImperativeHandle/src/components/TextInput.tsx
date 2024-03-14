import React, { Ref, useRef, forwardRef, useImperativeHandle } from 'react'

export interface TextInputProps {}

const TextInput = (
    props:TextInputProps,
    ref:Ref<TextInputProps>
) => {

    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        reset:() => {
            if(!localRef.current) return;

            localRef.current.value = '';
            localRef.current.focus();
        },
    }))



  return (
    <input type="text" ref={localRef} />
  )
}

export default forwardRef(TextInput)