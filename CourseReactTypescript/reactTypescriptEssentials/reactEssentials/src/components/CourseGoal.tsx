import React, { type PropsWithChildren } from 'react'
import {type ReactNode} from 'react';

// type CourseGoalProps = {
//     title: string;
//     children: ReactNode;
// }

// 2nd approach
type CourseGoalProps = PropsWithChildren<{
    id:number;
    title:string, 
    onDelete:(id:number) => void
}>;

const CourseGoal = ({
    title, 
    children,
    id,
    onDelete,
}: CourseGoalProps) => {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  )
}

export default CourseGoal