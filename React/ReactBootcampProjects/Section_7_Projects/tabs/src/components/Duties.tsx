import React from 'react';
import {FaAngleDoubleRight} from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';


interface DutiesProps{
    duties:string[];
}

const Duties = (props: DutiesProps) => {
    const{duties} = props;
    const id = uuidv4();
    console.log(id);
  return (
    <div>
        {duties.map((duty, index) => {
            return <div key={id} className='job-description'>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
            </div>
        })}
    </div>
  )
}

export default Duties