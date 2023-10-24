import React from 'react'
import { IJob } from '../models/models'
import { v4 as uuidv4 } from 'uuid';


interface BtnContainerProps {
    jobs: IJob[];
    currentItem:number;
    setCurrentItem:(index:number) => void;
}

const BtnContainer = (props: BtnContainerProps) => {
    const {jobs, currentItem, setCurrentItem} = props;
  return (
    <div className='btn-container'>
        {jobs.map((item,index) => {
            return <button key={uuidv4()} onClick={() => setCurrentItem(index)} className={index === currentItem ? 'job-btn': 'active-btn'}>{item.company}</button>
        })}
    </div>
  )
}

export default BtnContainer