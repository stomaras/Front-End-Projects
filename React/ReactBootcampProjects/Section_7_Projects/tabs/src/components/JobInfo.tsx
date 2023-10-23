import React from 'react'
import { IJob } from '../models/models'
import Duties from './Duties';

interface JobInfoProps{
    jobs:IJob[];
}

const JobInfo = (props: JobInfoProps) => {

  const {jobs} = props;

  return (
    <article className='job-info'>
        <h3>{jobs[0].title}</h3>
        <span className='job-company'>{jobs[0].company}</span>
        <p className='job-date'>{jobs[0].dates}</p>
        <Duties duties={jobs[0].duties}/>
    </article>
  )
}

export default JobInfo