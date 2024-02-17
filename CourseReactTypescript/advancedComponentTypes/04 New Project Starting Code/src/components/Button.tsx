import React from 'react'
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
    el: 'button'
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
    el:'anchor'
} & ComponentPropsWithoutRef<'a'>;

const Button = (props: ButtonProps | AnchorProps) => {
    const {el} = props;


    if(el === 'button') {
        return <button {...props}></button>
    }

    if(el === 'anchor') {    
      return <a {...props}></a>
    }

}

export default Button