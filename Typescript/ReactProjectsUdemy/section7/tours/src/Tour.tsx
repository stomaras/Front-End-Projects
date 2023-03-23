import React from 'react'

export interface TourProps{
    key: number;
    name: string;
    info: string;
    image: string;
    price: number; 
}

const Tour = (props:TourProps) => {
  return (
      <article className='single-tour'>
          <img src={props.image} alt={props.name} className="img" />
          <span className='tour-price'>${props.price}</span>
          <div className='tour-info'>
              <h5>{props.name}</h5>
              <p>{props.info}</p>
          </div>
    </article>
  )
}

export default Tour