import React from 'react'

export interface PersonProps {
    img:string;
    name:string;
    age:number;
}

const Person = (props:PersonProps) => {
const {img, name, age} = props;

  return (
    <article>
        <img src={img} alt="" />
        <p>{name}<span>{age} years</span></p>
    </article>   
  )
}

export default Person