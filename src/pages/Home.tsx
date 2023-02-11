import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, todoState } from "../redux/modules/todos";
import Todo from "../components/Todo";

const Home = () => {
    const inputFocus = useRef<HTMLInputElement>(null);
    const [titleInput, setTitleInput] = useState<string>('');
    const [descInput, setDescInput] = useState<string>('');
  
    const dispatch = useDispatch();

    const todoList = useSelector((state : {todos : {counter : number, todos : todoState[]}}) => state.todos);

    const titleOnChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
      setTitleInput(e.target.value);
    }
  
    const descOnChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
      setDescInput(e.target.value);
    }

    const onClickAddTodo = () : void => {
        dispatch(addTodos({
            isDone : false,
            title : titleInput,
            desc : descInput
        }));

        setTitleInput('');
        setDescInput('');
    }
  
    return (
      <div>
        <div>
          <h1>My Todo List</h1>
          <span>Title : </span>
          <input value = {titleInput} onChange = {titleOnChange} ref = {inputFocus}/>
          <span>Description : </span>
          <input value = {descInput} onChange = {descOnChange}/>
          <button onClick = {() => onClickAddTodo()}>Add</button>
        </div>
        <div>
            <div>
                <h1>Doing</h1>
                {todoList.todos.filter((val : todoState) => val.isDone === false).map((v : todoState) => <Todo key = {v.key} todo = {v}/>)}
            </div>
            <div>
                <h1>Done</h1>
                {todoList.todos.filter((val : todoState) => val.isDone === true).map((v : todoState) => <Todo key = {v.key} todo = {v}/>)}
            </div>
        </div>
      </div>
    );
}

export default Home;