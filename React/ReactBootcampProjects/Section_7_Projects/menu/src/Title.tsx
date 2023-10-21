import React from 'react'

interface TitleProps {
    text:string;
}

const Title = (props: TitleProps) => {
    const {text} = props;
    return (
        <div className="title">
                <h2>{text || "Default Title"}</h2>
                <div className="title-underline"></div>
        </div>

  )
}

export default Title