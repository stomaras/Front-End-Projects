import { ITask } from "../models/models";
import { tasks } from "../data/data";


export interface TaskAction {
    type:string;
    task:ITask;
}

export interface TaskState {
    tasks:ITask[]
}

export const initialTasks :ITask[] = tasks;

export const tasksReducer = (state:TaskState, action:TaskAction):TaskState=> {
    switch(action.type){
        case 'added': {
            const newTask :ITask = {
                id: action.task.id,
                text: action.task.text,
                done: action.task.done
            }
            
            state.tasks.push(newTask);
            const newState:TaskState = state;
            return newState;
        }
        case 'changed':{
            const index = state.tasks.findIndex((t) => t.id === action.task.id);
            state.tasks[index] = action.task;
            const newState:TaskState = state;
            return newState;
        }
        case 'deleted': {
            state.tasks.filter((t) => t.id !== action.task.id);
            const newState :TaskState = state;
            return newState;
        }
        default: {
            throw Error('Unknown action:' + action.type);
        }
    }
}
