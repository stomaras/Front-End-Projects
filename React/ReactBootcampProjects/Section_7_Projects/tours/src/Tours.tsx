import React from 'react'
import {TourModel} from './models/Tour';
import Tour from './Tour';

export interface ToursProps {
    tours: TourModel[];
}

const Tours = (props: ToursProps) => {
    const {tours} = props;
  return (
    <section>
        <div className="title">
            <h2>our tours</h2>
            <div className="title-underline"></div>
        </div>
        <div className="tours">
            {tours.map((tour) => {
                return <Tour tour={tour}/>
            })}
        </div>
    </section>
  )
}

export default Tours