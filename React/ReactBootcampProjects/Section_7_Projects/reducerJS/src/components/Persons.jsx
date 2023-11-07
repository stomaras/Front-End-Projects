import React, { useReducer } from 'react'
import { data } from '../data/data'
import { useState } from 'react'

const defaultState = {
    people:data,
    isLoading:false,
}

const reducer = (state, action) => {
    if(action.type === 'CLEAR_LIST'){
        return {...state,people:[]};
    }
};

// with useReducer we do not immediately update the state 
// you dispatch pass the action and go through the reducer in order to update the state

const Persons = () => {
    const [state, dispatch] = useReducer(reducer,defaultState);

    const removeItem = (id) => {
        // const newPeople = people.filter((person) => person.id !== id);
        // setPeople(newPeople);
    }

    const clearAllItems = () => {
        dispatch({type:'CLEAR_LIST'})
    }

    const resetList = () => {
        // setPeople(data);
    }

    console.log(state);

    return (
        <div>
            {state.people.map((person) => {
                const {id, name} = person;
                return (
                    <div key={id}>
                        <h1>{name}</h1>
                        <button type='button' onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}
            {state.people.length < 1 ? (
                <button type='button' style={{marginTop:'2rem'}} className='btn' onClick={() => resetList()}>reset</button>
            ):(
                <button type='button' style={{marginTop:'2rem'}} className='btn' onClick={() => clearAllItems()}>clear items</button>
            )}
        </div>
    )
}

export default Persons