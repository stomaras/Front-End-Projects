import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tour, tours } from "./Models/Models";
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<Tour[]>([]);

  const removeTour = (id: number) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchTours();
  }, []);
  
  if (isLoading) {
    return <main>
      <Loading/>
    </main>
  }


  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button type='button' style={{marginTop:'2rem'}} className="btn" onClick={()=>fetchTours()}>refresh</button>
      </div>
    </main>
  }

  return (
    <main className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
