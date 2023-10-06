
import React, { MouseEventHandler, useState } from 'react'
import Title from './Title'
import { tours } from '../data/data'
import { ITours } from '../data/data'

const Tours = () => {

  const [myTours, setMyTours] = useState<ITours[]>(tours)


  const removeTour = (id:number) => {
    const newTours = myTours.filter((tour) =>  {return tour.id !== id});
    console.log(newTours)
    setMyTours(newTours);
  }
  
  return (
    <>
<section className="section" id="tours">
    <Title title={'featured'} subTitle={'tours'}></Title>
  <div className="section-center featured-center">
    {myTours.map((tour) => {
      const {id, image, date, title, info, location, duration, dollars} = tour;

      return (
        <article className="tour-card">
        <div className="tour-img-container">
          <img src={image} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>
            {info}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> {location}
            </p>
            <p>{duration} days</p>
            <p>from ${dollars}</p>
            <button className='tour-remove-item' type='button' onClick={() => removeTour(id)}>remove</button>
          </div>
        </div>
      </article>
      )
    })}
  </div>
</section>
    
    </>
  )
}

export default Tours