import React from 'react'
import {data} from "../data/data";

export interface DialogProps {
    title:string;
    onClick: (id:number) => (event:React.MouseEvent<HTMLButtonElement>) => void;
}

const Dialog = (props:DialogProps) => {
    const {title, onClick} = props;

    
    return (
        <div>
            <p>{title}</p>
            <ul>
                {data && data.map((el) => (
                    
                    <li key={el.id}>        
                        <span>{el.name}</span>
                        <button onClick={onClick(el.id)}>done</button>
                    </li>   
                ))}
            </ul>
        </div>
    )
}

export default Dialog