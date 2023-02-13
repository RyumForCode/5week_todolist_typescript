import React, { KeyboardEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, todoState } from "../redux/modules/todos";
import Todo from "../components/Todo";
import styled from 'styled-components';

const Home = () => {
    const inputRef = useRef<HTMLInputElement>(null);
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
        if (titleInput && descInput) {
            dispatch(addTodos({
                isDone : false,
                title : titleInput,
                desc : descInput
            }));
    
            setTitleInput('');
            setDescInput('');
            if (inputRef.current != null) {
                inputRef.current.focus();
            }
        }
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickAddTodo();
        }
    };
  
    return (
        <StWrapper>
            <StForm>
                <StTitleH1>My Todo List</StTitleH1>
                <StLabel>Title : </StLabel>
                <StInput value = {titleInput} onChange = {titleOnChange} placeholder = 'Type title' ref = {inputRef}/>
                <StLabel>Description : </StLabel>
                <StInput value = {descInput} onChange = {descOnChange} placeholder = 'Type description' onKeyDown = {handleKeyPress}/>
                <StButton onClick = {() => onClickAddTodo()}>Add</StButton>
            </StForm>
            <StTodoListContainer>
                <StTodoListTitle>Doing</StTodoListTitle>
                <StTodoContainer>
                    {todoList.todos.filter((val : todoState) => val.isDone === false).map((v : todoState) => <Todo key = {v.key} todo = {v}/>)}
                </StTodoContainer>
                <StTodoListTitle>Done</StTodoListTitle>
                <StTodoContainer>
                    {todoList.todos.filter((val : todoState) => val.isDone === true).map((v : todoState) => <Todo key = {v.key} todo = {v}/>)}
                </StTodoContainer>
            </StTodoListContainer>
        </StWrapper>
    );
}

export default Home;

const StWrapper = styled.div`
    display : flex;
    flex-direction : column;
    margin : auto;
    align-items : center;
    height : 1200px;
    max-width : 1200px;
    min-width : 800px;
`

const StForm = styled.div`
    width : 100%;
`

const StTitleH1 = styled.h1`
    font-family : 'inter';
    font-weight : 900;
    font-size : 2rem;
`

const StLabel = styled.span`
    font-family : 'inter';
    font-weight : 700;
    font-size : 1rem;
    margin-left : 1rem;
    margin-right : 0.25rem;
`

const StInput = styled.input`
    height : 2rem;
    width : 250px;
    margin-right : 0.5rem;
    border : none;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    background-color : white;
    border-radius : 0.25rem;
    padding-left : 1rem;
    &:focus {
        outline : none;
        outline: 2px solid rgb(52, 199, 89);
        outline-offset: -2px;
    }
    &::placeholder {
        font-weight : 400;
        color : rgb(180, 180, 180);
    }
`

const StButton = styled.button`
    padding : 0 1rem;
    border : none;
    height : 2rem;
    border-radius : 0.25rem;
    background-color : rgb(52, 199, 89);
    color : white;
    font-size : 1rem;
    font-weight : 700;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 200ms;
    &:hover {
        background-color : rgb(120, 210, 143);
    }
`

const StTodoListContainer = styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;
`

const StTodoListTitle = styled.h1`
    margin-top : 2rem;
    font-weight : 800;
`

const StTodoContainer = styled.div`
    display : flex;
    flex-wrap : wrap;
    flex-direction : row;
    justify-content : flex-start;
    align-items:center;
    gap : 1rem;
`