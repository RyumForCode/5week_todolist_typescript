export const ADD_TODOS = 'todos/ADD_TODOS';
export const REMOVE_TODOS = 'todos/REMOVE_TODOS';
export const TOGGLE_TODOS = 'todos/TOGGLE_TODOS';

export interface todosState {
    key? : number,
    isDone : boolean,
    title : string,
    desc : string
}

export const addTodos = (payload : todosState) : {type : string, payload : todosState} => {
    return {
        type : ADD_TODOS,
        payload
    }
}

export const removeTodos = (payload : number) : {type : string, payload : number} => {
    return {
        type : REMOVE_TODOS,
        payload
    }
}

export const toggleTodos = (payload : number) : {type : string, payload : number} => {
    return {
        type : TOGGLE_TODOS,
        payload
    }
}

export const initialState : {counter : number, todos : todosState[]} = {
    counter : 2,
    todos : [
        {
            key : 0,
            isDone : false,
            title : 'Try to learn React.',
            desc : 'This is description.'
        },
        {
            key : 1,
            isDone : false,
            title : 'Test',
            desc : 'Test'
        }
    ]
}

const todos = (state = initialState, action : {type : string, payload : todosState}) => {
    switch (action.type) {
        case ADD_TODOS:
            return {counter : state.counter + 1, todos : [...state.todos, {...action.payload, key : state.counter}]};
        case REMOVE_TODOS:
            return state;
        case TOGGLE_TODOS:
            return state;
        default:
            return state;
    }
}

export default todos;