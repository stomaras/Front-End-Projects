import React from 'react'

export interface PersonProps {
    img:string;
    name:string;
    age:number;
}

const Person = (props:PersonProps) => {
const {img, name, age} = props;

  return (
    <article className='person-details'>
        <img src={img} alt="" className='person-details__img'/>
        <p className='person-details__name'>{name}<span className='person-details__age'>{age} years</span></p>
    </article>   
  )
}

export default Person