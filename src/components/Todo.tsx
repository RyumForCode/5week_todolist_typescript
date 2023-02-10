import { todoItem } from "../App";

const Todo = ({todo, removeHandler, toggleHandler} : {todo : todoItem, removeHandler : any, toggleHandler : any}) => {
    return(
        <div>
            {todo.title}, {todo.desc}, {todo.key}
            <br/>
            <button onClick = {() => removeHandler(todo.key)}>Remove</button>
            {todo.isDone === false ? <button onClick = {() => toggleHandler(todo.key)}>Done</button> : <button onClick = {() => toggleHandler(todo.key)}>Cancel</button>}
        </div>
    );
}

export default Todo;