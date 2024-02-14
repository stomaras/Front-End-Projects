import React, { type PropsWithChildren } from 'react'
import {type ReactNode} from 'react';

// type CourseGoalProps = {
//     title: string;
//     children: ReactNode;
// }

// 2nd approach
type CourseGoalProps = PropsWithChildren<{title:string}>;

const CourseGoal = ({
    title, 
    children
}: CourseGoalProps) => {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button>Delete</button>
    </article>
  )
}

export default CourseGoal