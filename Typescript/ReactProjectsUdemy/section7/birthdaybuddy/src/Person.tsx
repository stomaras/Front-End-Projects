import React from 'react'
import { Human } from './data'

export const Person = (props:Human) => {
  return (
      <article className='person'>
          <img src={props.image} alt={props.name} className='img' />
          <div>
              <h4>{props.name}</h4>
              <p>{props.age} years</p>
          </div>
    </article>
  )
}
