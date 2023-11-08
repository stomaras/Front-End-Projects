import React, { useReducer } from 'react'
import personReducer, { defaultState } from '../state/actions'

const Persons = () => {
    const [state, dispatch] = useReducer(personReducer, defaultState);


    const removeItem = (id:number) => {
        dispatch({type:'REMOVE_ITEM', payload:{id}});
    }

    const clearAllItems = () => {
        dispatch({type:'CLEAR_LIST'});
    }

    const resetList = () => {
        dispatch({type:'RESET_LIST'});
    }

    console.log(state);

  return (
    <div>
        
        {
            state.people.map((person) => {
                const {id, name} = person;
                return (
                    <div key={id}>
                        <h1>{name}</h1>
                        <button type='button' onClick={() => removeItem(id)}>remove</button>
                    </div>
                )
            })
        }
        {state.people.length < 1 ? (
            <button type='button' style={{marginTop:'2rem'}} className='btn' onClick={() => resetList()}>reset</button>
        ):(
            <button type='button' style={{marginTop:'2rem'}} className='btn' onClick={() => clearAllItems()}>clear items</button>
        )}
    </div>
  )
}

export default Persons