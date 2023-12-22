import { createContext, useContext, useState } from "react";


interface QuizState {
    gameState: "idle" | "fetching" | "ready";
};

const initialState:QuizState = {
    gameState:'idle'
}

const QuizContext = createContext<QuizState>(initialState)

export function QuizProvider({children}:{children:React.ReactNode}){
    const [state, dispatch] = useState(initialState);

    return (
        <QuizContext.Provider value={state}>
            {children}
        </QuizContext.Provider>
    )
}

export function useQuiz() {
    return useContext(QuizContext)
}

/*
ReactNode: covers all possible types
ReactElement: covers only JSX Elements
*/