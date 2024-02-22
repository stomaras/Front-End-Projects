import {ReactNode, createContext, useContext, useReducer} from "react";
import Timer from "../Timer";

export type Timer = {
    name:string;
    duration:number;
};

type TimersState = {
    isRunnning: boolean,
    timers: Timer[];
};

const initialState: TimersState = {
    isRunnning: true,
    timers: []
}

type TimersContextValue = TimersState & {
    addTimer: (timerData:Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
};

export const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const timersCTX = useContext(TimersContext);

    if(timersCTX === null){
        throw new Error("useTimersContext must be used within a TimersContextProvider");
    }

    return timersCTX;
}

type TimersContextProviderProps = {
    children: ReactNode;
}

type StartTimersAction = {
    type: "START_TIMERS";
}

type StopTimersAction = {
    type: "STOP_TIMERS";
}

type AddTimerAction = {
    type: "ADD_TIMER",
    payload: Timer;
}

type Action = {
    type:StartTimersAction | StopTimersAction | AddTimerAction;
};

function timersReducer(state: TimersState, action:Action): TimersState  {
    if(action.type === 'START_TIMERS'){
        return {
            ...state,
            isRunnning: true,
        }
    }
    if(action.type === 'STOP_TIMERS'){
        return {
            ...state,
            isRunnning: false,
        }
    }
    if(action.type === 'ADD_TIMER'){
        return {
            ...state,
            timers:[
                ...state.timers,
                {
                    name: action.pyload.name,
                    duration:action.payload.duration,
                }
            ]
        }        
    }

    return state;
}

export default function TimersContextProvider({children}:TimersContextProviderProps){

    const [timersState, dispatch] = useReducer(timersReducer, initialState);

    const ctx:TimersContextValue = {
        timers:timersState.timers,
        isRunnning: timersState.isRunnning,
        addTimer: (timerData:Timer) => {
            dispatch({type:'ADD_TIMER', payload: timerData});
        },
        startTimers: () => {
            dispatch({type:'START_TIMERS'});
        },
        stopTimers: () => {
            dispatch({type:'STOP_TIMERS'});
        },
    }

    return <TimersContext.Provider value={ctx}>
        {children}
    </TimersContext.Provider>
}

