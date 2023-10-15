import React from 'react'
import {TourModel} from './models/Tour';
import Tour from './Tour';
import './App.css';


export interface ToursProps {
    tours: TourModel[];
    removeTours: (id:number) => void;
}

const Tours = (props: ToursProps) => {
    const {tours, removeTours} = props;
  return (
     <section className='tours-wrapper'>
        <div className="title">
            <h2 className='title__main'>our tours</h2>
        </div>
        <div className="tours">
            {tours.map((tour) => {
                return <Tour key={tour.id} tour={tour} removeTour={removeTours}/>
            })}
        </div>
    </section> 
  )
}

export default Tours