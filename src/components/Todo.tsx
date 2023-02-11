import { todosState } from "../redux/modules/todos";

const Todo = ({ todo } : { todo : todosState }) => {
    return (
        <div>
            {todo.title}, {todo.desc}
        </div>
    )
}

export default Todo;