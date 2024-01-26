import React from 'react'
import "./Card.css"

export interface CardProps {
    children:React.ReactNode;
    style:any;
}

const Card = (props:CardProps) => {
  return (
    <div className='card' style={props.style}>
        {props.children}
    </div>
  )
}

export default Card