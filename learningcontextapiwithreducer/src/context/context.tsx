import { createContext, useContext, useReducer} from "react";


export type Status = "idle" | "fetching" | "ready";

interface QuizContext {
    state:QuizState,
    dispatch:React.Dispatch<QuizAction>
}

interface QuizState {
    gameStatus: Status;
};

type QuizAction = {type:"setStatus"; payload:Status}

const initialState:QuizState = {
    gameStatus:'idle'
}

const QuizContext = createContext<QuizContext>({
    state:initialState,
    dispatch: () => null
})

export function QuizProvider({children}:{children:React.ReactNode}){
    const [state, dispatch] = useReducer(QuizReducer, initialState);

    return (
        <QuizContext.Provider value={{state, dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

export function useQuiz() {
    return useContext(QuizContext)
}

function QuizReducer(state:QuizState, action:QuizAction):QuizState {
    switch(action.type) {
        case "setStatus":
            return {...state, gameStatus:action.payload};
        default:
            throw new Error("Unknown action");
    }
}






/*
ReactNode: covers all possible types
ReactElement: covers only JSX Elements
*/