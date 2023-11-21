import React, { useState, useCallback, useMemo } from 'react'
import { data } from '../data/data';
import List from './List';
import Counter from './Counter';
import Form from './Form';
import slowFunction from './slowFunction';

const LowerState = () => {

    const [people, setPeople] = useState(data);
    const [count, setCount] = useState(0)

    // will only run once
    const value = useMemo(() => slowFunction(),[])
    
    console.log(value);
    

    const addPerson = (name:string) => {
        const fakeId = Date.now();
        const newPerson = {id:fakeId, name};
        setPeople([...people, newPerson]);
    }

    // every time we click count button we create removePerson from scratch each and every time and js say this prop change
    const removePerson = useCallback((id:number) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    },[people]);
    


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
        <List people={people} removePerson={removePerson}/>
    </section>
  )
}

export default LowerState