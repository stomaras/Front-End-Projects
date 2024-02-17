import React from 'react'
import { type ReactNode } from 'react'

type HitBoxProps ={
    mode:'hint';
    children: ReactNode;
}

type WarningBoxProps ={
    mode: 'warning',
    severity: 'low' | 'medium' | 'high' ,
    children: ReactNode,
}

type InfoBoxProps = HitBoxProps | WarningBoxProps;


const InfoBox = (props: InfoBoxProps) => {
    const {children, mode} = props;

    if(mode === 'hint'){
        return (
            <aside className='infobox info-hint'>
                <p>{children}</p>
            </aside>
        )
    }

    const {severity} = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
    </aside>
  )
}

export default InfoBox