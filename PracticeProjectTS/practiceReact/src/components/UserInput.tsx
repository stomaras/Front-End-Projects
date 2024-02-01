
import React from 'react'
import { useState } from 'react'

export interface UserState {
    initialInvestment:number;
    annualInvestment:number;
    expectedReturn:number;
    duration:number;
}

const intialState:UserState = {
        initialInvestment:1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration:10
}

const UserInput = () => {
    const [userInput, setUserInput] = useState<UserState>(intialState);

    const handleChange = (inputIdentifier:string, newValue:string) => {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]:newValue
            }
        })
    }

  return (
    <section id='user-input'>
        <div className='input-group'>
            <p>
                <label>Initial Investment</label>
                <input 
                    value={userInput.initialInvestment} 
                    type='number' 
                    required 
                    onChange={(e) => handleChange('initialInvestment', e.target.value)}
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input 
                    type='number' 
                    value={userInput.annualInvestment}
                    onChange={(e) => handleChange('annualInvestment', e.target.value)}
                    required/>
            </p>
        </div>
        <div className='input-group'>
            <p>
                <label>Expected Return</label>
                <input 
                    type='number' 
                    value={userInput.expectedReturn}
                    onChange={(e) => handleChange('expectedReturn', e.target.value)}
                    required/>
            </p>
            <p>
                <label>Duration</label>
                <input 
                    type='number' 
                    value={userInput.duration}
                    onChange={(e) => handleChange('duration', e.target.value)}
                    required/>
            </p>
        </div>
    </section>
  )

}

export default UserInput