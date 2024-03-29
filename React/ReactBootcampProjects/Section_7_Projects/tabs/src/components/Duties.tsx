import React from 'react';
import {FaAngleDoubleRight} from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';


interface DutiesProps{
    duties:string[];
}

const Duties = (props: DutiesProps) => {
    const{duties} = props;
    const id = uuidv4();
  return (
    <div>
        {duties.map((duty, index) => {
            return <div key={uuidv4()} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
            </div>
        })}
    </div>
  )
}

export default Duties