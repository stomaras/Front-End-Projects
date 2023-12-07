import React from 'react'
import aboutSvg from "../project-assets/about.svg";
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} className='w-full h-64' />
            <article>
                <SectionTitle text='code and coffee'/>
                <p className='text-slate-600 mt-8 leading-loose'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores amet impedit maxime harum! Dolorum eius ipsum, labore quibusdam dolores voluptate,
                    aliquid magnam exercitationem, illo eos maxime qui facilis inventore corporis. 
                    Vitae quaerat eveniet adipisci ad voluptatem, perferendis nulla blanditiis quae aliquam beatae. Exercitationem magni maxime illo, autem rem cupiditate!
                </p>
            </article>
        </div>
    </section>
  )
}

export default About