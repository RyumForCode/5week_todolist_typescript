import Todo from "./Todo";
import { todoItem } from "../App";

const TodoList = ({todos, removeHandler, toggleHandler} : {todos : todoItem[], removeHandler : any, toggleHandler : any}) => {
    console.log();
    return (
        <div>
            <div>
                <h1>Doing</h1>
                {todos.filter(v => v.isDone === false).map(val => <Todo todo = {val} key = {val.key} removeHandler = {removeHandler} toggleHandler = {toggleHandler}/>)}
            </div>
            <div>
                <h1>Done</h1>
                {todos.filter(v => v.isDone === true).map(val => <Todo todo = {val} key = {val.key} removeHandler = {removeHandler} toggleHandler = {toggleHandler}/>)}
            </div>
        </div>
    );
}

export default TodoList;