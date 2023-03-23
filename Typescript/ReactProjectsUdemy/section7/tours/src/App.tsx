import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tour, tours } from "./Models/Models";

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<Tour[]>([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  },[]);

  return (
    <div className="App">
      Tours Starter
    </div>
  );
}

export default App;
