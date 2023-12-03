import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';


const RepositoriesList:React.FC = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("term");
        const data = dispatch(actionCreators.searchRepositories(term) as any);
        console.log(data);
    }

  return <div>
    <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => {setTerm(e.target.value)}}/>
        <button>Search</button>
    </form>
  </div>
};

export default RepositoriesList