import React from 'react'
import { Job } from './JobInfo';

export interface BtnContainerProps {
    jobs: Job[];
    currentItem: number;
    setCurrentItem:(value:number)=> void;
}

const BtnContainer = (props:BtnContainerProps) => {
  return (
      <div className='btnContainer'>
          {
              props.jobs.map((item,index) => {
                  return <button
                      key={item.id}
                      onClick={() => props.setCurrentItem(index)}
                      className={index === props.currentItem ? 'job-btn active-btn' : 'job-btn'}
                  >
                    {item.company}
                  </button>
              })
          }
    </div>
  )
}

export default BtnContainer