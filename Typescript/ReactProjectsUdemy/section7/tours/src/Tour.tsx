import React, { useState } from 'react'

export interface TourProps{
    id: number;
    name: string;
    info: string;
    image: string;
    price: number; 
    removeTour(id:number): void
}

const Tour = (props: TourProps) => {
  
  const [readMore, setReadMore] = useState<boolean>(false);
  console.log(props.info.substring(0,10));
  
  return (
      <article className='single-tour'>
          <img src={props.image} alt={props.name} className="img" />
          <span className='tour-price'>${props.price}</span>
          <div className='tour-info'>
              <h5>{props.name}</h5>
              <p>{readMore ? props.info : `${props.info.substring(0, 200)}...`}</p>
              <button type='button' className='info-btn' onClick={() => setReadMore(!readMore)}>{readMore ? 'show less': 'read more'}</button>
              <button type='button' className='btn btn-block delete-btn' onClick={() => props.removeTour(props.id)}>
                not interested
              </button>
        </div>
    </article>
  )
}

export default Tour