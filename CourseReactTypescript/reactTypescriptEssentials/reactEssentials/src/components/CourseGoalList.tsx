import React from 'react'
import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal } from '../App';

type CourseGoalList = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({goals, onDeleteGoal}:CourseGoalList) => {
  return (
    <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
              <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                <p>Learn it from the ground up</p>
              </CourseGoal>
          </li>
        ))}
    </ul>
  )
}

export default CourseGoalList