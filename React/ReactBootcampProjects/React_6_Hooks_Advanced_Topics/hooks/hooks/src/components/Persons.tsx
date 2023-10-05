import React, { useState } from 'react'
import { IPeople, peoples } from '../data/data'

const Persons = () => {

    
    const [persons, setPersons] = useState(peoples);
    const removeItem = (id:number) => {
        const personsNew = persons.filter((person) => person.id !== id)
        setPersons(personsNew);
    }

    const handleClickClearItems = () => {
        removeAllItems();
    }

    const removeAllItems = () => {
        setPersons([]);
    }


  return (
    <ul>
        {persons.map((person) => {
            const {id, name} = person
            return (
                <div key={id}>
                    <h4>{name}</h4>
                    <button type='button' onClick={() => removeItem(id)}>remove</button>
                </div>
            )
        })}
        <button type='button' style={{marginTop:'2rem'}} onClick={handleClickClearItems}>Clear Items</button>
    </ul>
    
  )
}

export default Persons