import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import { useActions } from '../hooks/useActions';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';


const RepositoriesList:React.FC = () => {
    const [term, setTerm] = useState('');
    const {searchRepositories} = useActions();
    const {data, error, loading} = useTypedSelector((state) => state.repositories);

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
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
  </div>
};

export default RepositoriesList