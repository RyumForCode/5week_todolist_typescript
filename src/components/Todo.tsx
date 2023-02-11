import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { todoState, removeTodos, toggleTodos } from "../redux/modules/todos";

const Todo = ({ todo } : { todo : todoState }) => {
    const dispatch = useDispatch();
    return (
        <div>
            {todo.title}, {todo.desc}
            <button onClick = {() => dispatch(removeTodos(todo))}>Remove</button>
            {todo.isDone === false ? <button onClick = {() => dispatch(toggleTodos(todo))}>Done</button> : <button onClick = {() => dispatch(toggleTodos(todo))}>Cancel</button>}
            <Link to = {`/todos/${todo.key}`}>Inspect</Link>
        </div>
    )
}

export default Todo;