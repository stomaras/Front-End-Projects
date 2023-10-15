import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tours from './Tours';
import Loading from './Loading';
import { TourModel } from './models/Tour';

/***
 * Tours
 * Tour
 * Loading
 */

const url = "https://course-api.com/react-tours-project";

function App() {

  const [isLoaing, setIsLoading] = useState(true);
  const [tours, setTours] = useState<TourModel[]>([]);

  const removeTours = (id:number) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setIsLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      console.log(tours);
    }catch(err){
      console.log(err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchTours();
  },[]);

  if(isLoaing){
    return <main>
      <Loading/>
    </main>
  }

  if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <button type='button' style={{marginTop:'2rem'}} className='btn' onClick={() => fetchTours()}>Refetch</button>
      </div>
    </main>
  }



  return (
    <main>
      <Tours tours={tours} removeTours={removeTours}></Tours>
    </main>
  );
}

export default App;
