import { data } from "../data/data";
import { Person } from "../models/models";


export interface PersonState {
    people:Person[];
    isLoading:boolean;
}

export const defaultState:PersonState = {
    people:data,
    isLoading:false,
}


type ActionState = {type: "CLEAR_LIST"} | {type:'RESET_LIST'} | {type:'REMOVE_ITEM', payload:{id:number}}

const personReducer = (state: PersonState, action: ActionState) : PersonState => {
    switch(action.type){
        case 'CLEAR_LIST':
            return {...state, people:[]}
        case 'RESET_LIST':
            return {...state, people:data}
        case 'REMOVE_ITEM':
            const newPeople = state.people.filter((person) => person.id !== action.payload.id);
            return {...state, people:newPeople}
    }
}

export default personReducer;