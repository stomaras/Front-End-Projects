import React from 'react'
import { data } from '../data/data'
import { Person } from '../models/models';

const UseStateArray = () => {
    const [people, setPeople] = React.useState<Person[]>(data);

    const removeItem = (id:number) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };
    const clearItems = () => {
        setPeople([]);
    };


    const personItems = people.map(({id,name}) => {
        return <div>
            <h4 key={id}>{name}</h4>
            <button type='button' style={{marginTop:'2rem'}} className='btn' onClick={() => removeItem(id)}>remove</button>
        </div> 
    });

    
  return (
    <div>
        {personItems}
        <button type='button' style={{marginTop:'2rem'}} className='btn' onClick={clearItems}>clear items</button>
    </div>
  )
}

export default UseStateArray