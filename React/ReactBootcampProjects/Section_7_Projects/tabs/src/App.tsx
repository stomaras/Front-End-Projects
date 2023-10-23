import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { IJob } from './models/models';
import { log } from 'console';
import JobInfo from './components/JobInfo';

const url = "https://course-api.com/react-tabs-project";


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState<IJob[]>([]);

  const fetchJobs = async() => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  },[]);
  console.log(jobs);

  if(isLoading){
    return <section className="jobs-center">Loading...</section>
  }

  return (
    <section className='jobs-center'>
      <JobInfo jobs={jobs} />
    </section>
  );
}

export default App;
