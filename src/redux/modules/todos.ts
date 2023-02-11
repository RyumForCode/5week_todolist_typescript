export const ADD_TODOS = 'todos/ADD_TODOS';
export const REMOVE_TODOS = 'todos/REMOVE_TODOS';
export const TOGGLE_TODOS = 'todos/TOGGLE_TODOS';

export interface todoState {
    key? : number,
    isDone : boolean,
    title : string,
    desc : string
}

export const addTodos = (payload : todoState) : {type : string, payload : todoState} => {
    return {
        type : ADD_TODOS,
        payload
    }
}

export const removeTodos = (payload : todoState) : {type : string, payload : todoState} => {
    return {
        type : REMOVE_TODOS,
        payload
    }
}

export const toggleTodos = (payload : todoState) : {type : string, payload : todoState} => {
    return {
        type : TOGGLE_TODOS,
        payload
    }
}

export const initialState : {counter : number, todos : todoState[]} = {
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

const todos = (state = initialState, action : {type : string, payload : todoState}) => {
    switch (action.type) {
        case ADD_TODOS:
            return {counter : state.counter + 1, todos : [...state.todos, {...action.payload, key : state.counter}]};
        case REMOVE_TODOS:
            return {counter : state.counter, todos : [...state.todos.filter(v => v.key !== action.payload.key)]};
        case TOGGLE_TODOS:
            return {counter : state.counter, todos : [...state.todos.map(v => v.key === action.payload.key ? {...v, isDone : !action.payload.isDone} : v)]};
        default:
            return state;
    }
}

export default todos;