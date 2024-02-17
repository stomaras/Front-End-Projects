import React from 'react'
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & { href?:never };

type AnchorProps = ComponentPropsWithoutRef<'a'> & { href?:string };

// props is AnchorProps tells typescript that this function returns a Boolean but that if the Boolean value is true,
// this argument that has been passed to the function is of a specific type.
const isAnchorProps = (props:ButtonProps | AnchorProps): props is AnchorProps => {
    return 'href' in props;
}

const Button = (props: ButtonProps | AnchorProps) => {
    if(isAnchorProps(props)) {
        return <a className='button' {...props}></a>
    }

    return <button className='button' {...props}></button>

}

export default Button