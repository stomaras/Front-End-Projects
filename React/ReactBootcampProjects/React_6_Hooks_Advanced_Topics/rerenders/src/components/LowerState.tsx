import React, { useState } from 'react'
import { data } from '../data/data';
import List from './List';
import Counter from './Counter';
import Form from './Form';

const LowerState = () => {

    const [people, setPeople] = useState(data);
    const [count, setCount] = useState(0)

    

    const addPerson = (name:string) => {
        const fakeId = Date.now();
        const newPerson = {id:fakeId, name};
        setPeople([...people, newPerson]);
    }


  return (
    <section>
        {/* <Counter/> */}
        {/* <Form addPerson={addPerson}/> */}
        <button
          className='btn'
          onClick={() => setCount(count + 1)}
        >
          count {count}
        </button>
        <List people={people}/>
    </section>
  )
}

export default LowerState