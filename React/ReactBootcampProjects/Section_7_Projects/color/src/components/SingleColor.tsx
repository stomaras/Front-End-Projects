import React from 'react'
import { IColor } from './ColorList';

export interface SingleColorProps {
    color:IColor;
}

const SingleColor = (props: SingleColorProps) => {

    const {color} = props;

  return (
    <article className='color' style={{background: `#${color.rgb}`}}>
        <p className='percent-value'>{color.weight}%</p>
        <p className='color-value'>#{color.rgb}</p>
    </article>
  )
}

export default SingleColor