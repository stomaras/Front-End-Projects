export interface Todo {
    id: string;
    type: string;
    completed: boolean;
}

export interface TodoState {
    todoCount: number;
    todos: Todo[],
    completed: number;
    pending: number;
}