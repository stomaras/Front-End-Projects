import { useEffect } from 'react'
import './App.css'
import { useQuiz } from './context/QuizContext'
import Score from './components/Score'
import Game from './components/Game'
import { Question, QuestionsResponse } from './context/QuizContext'
import FullPageLoader from "../src/components/FullPageLoader";


function App() {

  const {state, dispatch} = useQuiz();
  console.log(state);


  async function fetchQuestion() {

    try {
      dispatch({type:'setStatus', payload:"fetching"});
      const response = await fetch('https://opentdb.com/api.php?amount=1&category=18');
      let data: QuestionsResponse = await(response.json());
      if(data.response_code === 0) {
        let question:Question = data.results[0];
        console.log(question);
        
        dispatch({type:'setStatus', payload:"ready"});
        dispatch({type:'setQuestion', payload:question});
      }else {
        dispatch({type:"setStatus", payload:'error'})
      }
    }catch(err) {
      dispatch({type:"setStatus", payload:'error'})
    }     
  }

  useEffect(() => {
    if(state.gameStatus === "idle"){
      fetchQuestion();
    }
  })
  

  return (
    <>
    {
      state.gameStatus === 'fetching' ? 
      <FullPageLoader/> : state.gameStatus == 'error' ?
      <p>Error...</p> : state.gameStatus == 'ready' ?
      <> 
      <Game/>
      <Score/> 
      </>:''
    }
    </>
  )
}

export default App
