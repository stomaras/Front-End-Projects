import React, { useState } from 'react'
import { data } from '../data/data';
import List from './List';
import Counter from './Counter';
import Form from './Form';

const LowerState = () => {

    const [people, setPeople] = useState(data);

    

    const addPerson = (name:string) => {
        const fakeId = Date.now();
        const newPerson = {id:fakeId, name};
        setPeople([...people, newPerson]);
    }


  return (
    <section>
        {/* <Counter/> */}
        <Form addPerson={addPerson}/>
        <List people={people}/>
    </section>
  )
}

export default LowerState