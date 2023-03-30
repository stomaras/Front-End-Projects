import React from 'react'

export interface TitleProps {
    text: string | null;
}

function Title(props: TitleProps) {

    return (
        <div className="title">
            <h2>{props.text || 'Default Title'}</h2>
            <div className="title-underline"></div>
        </div>
    ) 
}

export default Title;