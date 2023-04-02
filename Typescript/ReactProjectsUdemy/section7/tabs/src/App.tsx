import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return <section className='jobs-center'>
      <div className="loading">
        
      </div>
    </section>
  }
  
  return (
    <div className="App">
      Tabs Start
    </div>
  );
}

export default App;
