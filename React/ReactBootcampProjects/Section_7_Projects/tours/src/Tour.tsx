import React from 'react'
import { TourModel} from './models/Tour'
import './App.css';


interface TourProps {
    tour: TourModel
    removeTour: (id:number) => void;
}

const Tour = (props: TourProps) => {
    const {tour} = props;
  return (
    <article className="tour">
        <img src={tour.image} alt={tour.name} className="tour__image" width="309" height="300"/>
        <span className="tour__title">{tour.name}</span>
        <p className="tour__info">{tour.info}</p>
        <button className="tour__button" onClick={() => props.removeTour(tour.id)}>Not Interested</button> 
    </article>
  )
}

export default Tour