import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { todoState, removeTodos, toggleTodos } from "../redux/modules/todos";
import styled from 'styled-components';

const Todo = ({ todo } : { todo : todoState }) => {
    const dispatch = useDispatch();
    return (
        <StContentsContainer>
            <StLink to = {`/todos/${todo.key}`}>Inspect</StLink>
            <StTitle>{todo.title}</StTitle>
            <StDesc>{todo.desc}</StDesc>
            <StButtonContainer>
                <StRemoveButton onClick = {() => dispatch(removeTodos(todo))}>Remove</StRemoveButton>
                {todo.isDone === false ? <StToggleButton onClick = {() => dispatch(toggleTodos(todo))}>Done</StToggleButton> : <StToggleButton onClick = {() => dispatch(toggleTodos(todo))}>Cancel</StToggleButton>}
            </StButtonContainer>
        </StContentsContainer>
    )
}

export default Todo;

const StContentsContainer = styled.div`
    width : 240px;
    background-color : white;
    padding : 1rem;
    margin-top : 1rem;
    border-radius : 0.25rem;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    word-wrap : break-word;
`

const StLink = styled(Link)`
    color : rgb(52, 199, 89);
    font-size : 1rem;
    font-weight : 700;
    transition : 200ms;
    text-decoration : none;
    &:hover {
        color : rgb(120, 210, 143);
    }
`

const StTitle = styled.p`
    font-size : 1.5rem;
    font-weight : 700;
`

const StDesc = styled.p`
    font-size : 1rem;
    font-weight : 400;
    margin-top : 0.5rem;
`

const StButtonContainer = styled.div`
    display : flex;
    justify-content: space-between;
    margin-top : 0.5rem;
`

const StRemoveButton = styled.button`
    width : 48%;
    border : none;
    height : 2rem;
    border-radius : 0.25rem;
    background-color : rgb(255, 59, 48);
    color : white;
    font-size : 1rem;
    font-weight : 700;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    transition : 200ms;
    &:hover {
        background-color : rgb(255, 133, 126);
    }
`

const StToggleButton = styled.button`
    width : 48%;
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