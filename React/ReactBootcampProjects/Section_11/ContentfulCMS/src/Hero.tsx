import React from 'react'
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium maxime consequatur tempore commodi, 
                    natus dicta quaerat repellendus autem culpa libero repellat suscipit inventore dolore laboriosam! 
                    Odio, mollitia hic. Autem reiciendis nisi quaerat provident, quia ipsam modi debitis, atque quis nesciunt aspernatur cum mollitia dolore est, quos natus voluptates nostrum iure.
                </p>
                <div className="img">
                    <img src={heroImg} alt="woman and the borwser" className='img'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero