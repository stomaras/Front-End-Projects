import React from 'react'

export interface SkillsCardProps {
    title:string;
    icon:JSX.Element;
    text:string;
}

const SkillsCard = (props:SkillsCardProps) => {

    const {title,icon,text} = props;

  return (
    <article>
        <span>{icon}</span>
        <h4 className='mt-6 font-bold'>
            {title}
        </h4>
        <p className='mt-2 text-slate-500'>{text}</p>
    </article>
  )
}

export default SkillsCard