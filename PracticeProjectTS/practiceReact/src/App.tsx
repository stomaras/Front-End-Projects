import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import Results from './components/Results';
export interface UserState {
  initialInvestment:number;
  annualInvestment:number;
  expectedReturn:number;
  duration:number;
}
function App() { 

  const intialState:UserState = {
        initialInvestment:1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration:10
  }
  const [userInput, setUserInput] = useState<UserState>(intialState);

  const handleChange = (inputIdentifier:string, newValue:string) => {
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            // with plus we force conversion of this string value to number value
            [inputIdentifier]: +newValue
        }
    })
  }

  return (
    <>
      <Header/>
      <UserInput handleChange={handleChange} userInput={userInput}/>
      <Results input={userInput}/>
    </>
  )
}

export default App
