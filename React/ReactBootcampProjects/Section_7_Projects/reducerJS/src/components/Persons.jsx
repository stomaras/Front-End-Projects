import React from 'react'
import { data } from '../data/data'
import { useState } from 'react'


const Persons = () => {
    const [people, setPeople] = useState(data);


    const removeItem = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    }

    const clearAllItems = () => {
        setPeople([]);
    }


    return (
        <div>
            {people.map((person) => {
                const {id, name} = person;
                return (
                    <div key={id}>
                        <h1>{name}</h1>
                        <button type='button' onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}
            <button type='button' style={{marginTop:'2rem'}} className='btn' onClick={clearAllItems}>clear items</button>
        </div>
  )
}

export default Persons