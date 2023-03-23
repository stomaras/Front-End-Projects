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



  return (
    <main className="App">
      <Tours tours={tours} />
    </main>
  );
}

export default App;
