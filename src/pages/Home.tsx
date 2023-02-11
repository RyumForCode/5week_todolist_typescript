import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosState, addTodos } from "../redux/modules/todos";
import Todo from "../components/Todo";

const Home = () => {
    const inputFocus = useRef<HTMLInputElement>(null);
    const [titleInput, setTitleInput] = useState<string>('');
    const [descInput, setDescInput] = useState<string>('');
  
    const dispatch = useDispatch();

    const todos = useSelector((state : {todos : {counter : number, todos : todosState[]}}) => state.todos);

    const titleOnChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
      setTitleInput(e.target.value);
    }
  
    const descOnChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
      setDescInput(e.target.value);
    }
  
    return (
      <div>
        <div>
          <h1>My Todo List</h1>
          <span>Title : </span>
          <input value = {titleInput} onChange = {titleOnChange} ref = {inputFocus}/>
          <span>Description : </span>
          <input value = {descInput} onChange = {descOnChange}/>
          <button onClick = {() => {
            dispatch(addTodos({
                isDone : false,
                title : titleInput,
                desc : descInput
            }));
          }}>Add</button>
        </div>
        <div>
            {todos.todos.map((v : todosState) => <Todo key = {v.key} todo = {v}/>)}
        </div>
      </div>
    );
}
// *
export default Home;