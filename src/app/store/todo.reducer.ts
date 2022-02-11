import { Todo } from "../models/todo";

export interface TodoAction {
    type: string;
    payload: any;
}

export function todos(state: Todo[], action: TodoAction) {
    switch (action.type) {
        case 'ADD_TODO':
            return action.payload;
        case 'CREATE_TODO':
            return [...state, action.payload as Todo];
        case 'UPDATE_TODO':
            return state.map((todo: Todo) => {
                return todo.id === (action.payload as Todo).id
                    ? Object.assign({}, todo, action.payload)
                    : todo;
            });
        case 'DELETE_TODO':
            return state.filter((todo: Todo) => {
                return todo.id !== action.payload.id;
            });
        default:
            return state;
    }
}
