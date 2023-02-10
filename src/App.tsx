import React, { useRef, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

export interface todoItem {
  key : number,
  isDone : boolean,
  title : string,
  desc : string,
}

function App() {

  const counter = useRef<number>(1);
  const inputFocus = useRef<HTMLInputElement>(null);
  const [titleInput, setTitleInput] = useState<string>('');
  const [descInput, setDescInput] = useState<string>('');

  const [obj, setObj] = useState<todoItem[]>([
    {
      key : 0,
      isDone : false,
      title : 'Study React',
      desc : 'I am gonna study React'
    }
  ]);

  const titleOnChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
    setTitleInput(e.target.value);
  }

  const descOnChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
    setDescInput(e.target.value);
  }

  const onSubmitTodo = () : void => {
    const tempTodo : todoItem = {
      key : counter.current,
      isDone : false,
      title : titleInput,
      desc : descInput,
    }

    setObj(obj.concat(tempTodo));
    setTitleInput('');
    setDescInput('');
    counter.current += 1;
    inputFocus.current?.focus();
  }

  const onKeyPressed = (e : React.KeyboardEvent<HTMLInputElement>) : void => {
    if (e.key === 'Enter') {
      onSubmitTodo();
    }
  }

  const removeHandler = (e : number) : void => {
    setObj(obj.filter(v => v.key !== e));
  }

  const toggleHandler = (e : number) : void => {
    setObj(obj.map(v => v.key === e ? {...v, isDone : !v.isDone} : v));
  }

  return (
    <div>
      <div>
        <h1>My Todo List</h1>
        <span>Title : </span>
        <input value = {titleInput} onChange = {titleOnChange} ref = {inputFocus}/>
        <span>Description : </span>
        <input value = {descInput} onChange = {descOnChange} onKeyDown = {onKeyPressed}/>
        <button onClick = {onSubmitTodo}>Add</button>
      </div>
      <div>
        <TodoList todos = {obj} removeHandler = {removeHandler} toggleHandler = {toggleHandler}/>
      </div>
    </div>
  );
}

export default App;