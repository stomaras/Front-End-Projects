import React from 'react'
import { Tour as tour, tours } from './Models/Models';
import Tour from './Tour';

export interface ToursProps{
    tours: tour[];
    removeTour(id:number): void
}

const Tours = (props: ToursProps) => {
  return (
      <section>
          <div className="title">
              <h2>our tours</h2>
              <div className="title-underline"></div>
          </div>
          <div className="tours">
              {props.tours.map((tour) => {
                  console.log(tour);
                  return <Tour key={tour.id} {...tour} removeTour={props.removeTour} />
              })}
          </div>
    </section>
  )
}

export default Tours