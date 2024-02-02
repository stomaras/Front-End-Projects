import React from 'react'
import { UserState } from '../App';
import { calculateInvestmentResults, formatter } from '../util/investment';

export interface ResultsProps {
    input:UserState
}

const Results = ({input}:ResultsProps) => {
    const resultsData = calculateInvestmentResults(input)

    console.log(resultsData);
    
  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yeadData) => {
          const totalInterest = yeadData.valueEndOfYear - yeadData.annualInvestment * yeadData.year;
          const initialInvestment = 
            resultsData[0].valueEndOfYear - 
            resultsData[0].interest - 
            resultsData[0].annualInvestment;

            const totalAmountInvested = yeadData.valueEndOfYear - totalInterest;

          return (
            <tr key={yeadData.year}>
              <td>{yeadData.year}</td>
              <td>{formatter.format(yeadData.valueEndOfYear)}</td>
              <td>{formatter.format(yeadData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Results