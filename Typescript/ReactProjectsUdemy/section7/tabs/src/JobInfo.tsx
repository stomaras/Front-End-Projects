import React from 'react'
import Duties from './Duties';

export interface JobInfo {
    jobs:Job[]
}

export interface Job {
    id: number;
    order: number;
    title: string;
    dates: Date;
    duties: string[];
    company: string;
}



const JobInfo = (props: JobInfo) => {
    const {order,  title, dates, duties, company} = props.jobs[0];
  return (
      <article className='job-info'>
          <h3>{title}</h3>
          <span className='job-company'>{company}</span>
          {/* <p className='job-date'>{dates.getDate()}</p> */}
          <Duties duties={duties}/>
    </article>
  )
}

export default JobInfo