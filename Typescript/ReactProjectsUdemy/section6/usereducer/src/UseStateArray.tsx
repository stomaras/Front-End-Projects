import React from 'react'
import { data } from "./data";
import { people } from "./data";
import { Person } from './data';
import { useState, useReducer } from 'react';


const initialState = {
    people:data,
}

const reducer = () => {

}


const UseStateArray = () => {


    const [state, dispatch] = useReducer(reducer,initialState);

    const [people, setPeople] = React.useState<any>(data);

    const removeItem = (id: number) => {
        // let newPeople = people.filter((person: Person) => person.id !== id);
        // setPeople(newPeople);
        // setPeople(people.filter((person: Person) => person.id !== id));
    };

    const clearAllItems = () => {
        // setPeople([]);
    };

    const resetList = () => {
        // setPeople(data);
    }

  return (
      <div>
          {people.map((person: any) => {
              const {id, name} = person
              return <div key={id}>
                  <h4>{name}</h4>
                  <button type='button' onClick={() => removeItem(id)}>remove</button>
              </div>;  
          })}
          {people.length < 1 ? (
                  <button type='button' style={{ marginTop: '2rem' }} className="btn" onClick={resetList}>
                    Reset Items
                  </button>
            ) : (
                <button type='button' style={{ marginTop: '2rem' }} className="btn" onClick={clearAllItems}>
                    Clear Items
                </button> 
            )
          }
          
    </div>
  )
}

export default UseStateArray