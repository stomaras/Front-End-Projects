import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

export interface DutiesProps{
    duties:string[]
}

const Duties = (props: DutiesProps) => {
    const id = uuidv4();
    
  return (
      <div>
          {props.duties.map((duty, index) => {
              return <div key={id} className="job-desc">
                  <FaAngleDoubleRight className='job-icon' />
                  {duty}
              </div>
          })}
    </div>
  )
}

export default Duties