import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';


const RepositoriesList:React.FC = () => {
    const [term, setTerm] = useState('');
    const {searchRepositories} = useActions();
    const {data, error, loading} = useSelector((state:any) => state.repositories);

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("term");
        const data = searchRepositories(term);
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