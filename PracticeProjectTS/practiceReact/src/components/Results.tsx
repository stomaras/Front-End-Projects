import React from 'react'
import { UserState } from '../App';
import { calculateInvestmentResults } from '../util/investment';

export interface ResultsProps {
    input:UserState
}

const Results = ({input}:ResultsProps) => {
    const resultsData = calculateInvestmentResults(input)

    console.log(resultsData);
    
  return (
    <div>Results...</div>
  )
}

export default Results