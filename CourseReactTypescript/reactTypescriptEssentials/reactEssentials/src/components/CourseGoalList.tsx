import React, { ReactNode } from 'react'
import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal } from '../App';
import InfoBox from './InfoBox';

type CourseGoalList = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({goals, onDeleteGoal}:CourseGoalList) => {

  if(goals.length === 0){
    return <InfoBox mode='hint'>You have no course goals yet. Start adding some!</InfoBox>
  }

  let warningBox: React.ReactNode;

  if(goals.length >= 4){
    warningBox = 
    (
      <InfoBox mode="warning" severity='medium'>
        You are collecting a lot of goals. Do not put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
              <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                <p>Learn it from the ground up</p>
              </CourseGoal>
          </li>
        ))}
    </ul>
    </>
    
  )
}

export default CourseGoalList