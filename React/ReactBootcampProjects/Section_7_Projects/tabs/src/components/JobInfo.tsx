import React from 'react'
import { IJob } from '../models/models'
import Duties from './Duties';

interface JobInfoProps{
    jobs:IJob[];
    currentItem:number;
}

const JobInfo = (props: JobInfoProps) => {

  const {jobs, currentItem} = props;
  console.log(currentItem);

  return (
    <article className='job-info'>
        <h3>{jobs[currentItem].title}</h3>
        <span className='job-company'>{jobs[currentItem].company}</span>
        <p className='job-date'>{jobs[currentItem].dates}</p>
        <Duties duties={jobs[currentItem].duties}/>
    </article>
  )
}

export default JobInfo