import React, { useState } from 'react'
import { longList, shortList, list } from '../data'
import { IPeople } from '../models/models'

const Carousel = () => {

    const [people, setPeople] = useState<IPeople[]>(list);

  return (
    <section className='slider-container'>

    </section>
  )
}

export default Carousel