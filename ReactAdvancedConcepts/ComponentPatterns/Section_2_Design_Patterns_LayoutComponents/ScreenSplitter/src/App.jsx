import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SplitScreen } from './components/split-screen'

const LeftSideComp = ({title}) => {
  return (
    <h2 style={{backgroundColor:'crimson'}}>{title}</h2>
  )
}

const RightSideComp = ({title}) => {
  return (
    <h2 style={{backgroundColor:'burlywood'}}>{title}</h2>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      (<SplitScreen leftwidth={1} rightwidth={3}>
        <LeftSideComp title={'Right'}/>
        <RightSideComp title={'Left'}/>
      </SplitScreen>)
    </>
  )
}

export default App
