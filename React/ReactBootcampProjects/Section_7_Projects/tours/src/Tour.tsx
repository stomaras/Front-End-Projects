import React from 'react'
import { TourModel} from './models/Tour'

interface TourProps {
    tour: TourModel
}

const Tour = (props: TourProps) => {
    const {tour} = props;
  return (
    <article className='single-tour'>
        <img src={tour.image} alt={tour.name} className='img' />
        <span className='tour-price'>${tour.price}</span>
    </article>
  )
}

export default Tour