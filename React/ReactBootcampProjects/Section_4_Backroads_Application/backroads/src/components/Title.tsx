import React from 'react'

export interface TitleProps {
    title:string;
    subTitle:string;
}

const Title = (props:TitleProps) => {
    const {title, subTitle} = props;
    
  return (
    <div className="section-title">
        <h2>
            {title} <span>{subTitle}</span>
        </h2>
    </div>
  )
}

export default Title