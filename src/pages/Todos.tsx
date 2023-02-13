import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { todoState } from "../redux/modules/todos";
import styled from "styled-components";

const Todos = () => {

    const data = useSelector((state : {todos : {counter : number, todos : todoState[]}}) => state.todos);
    const params = useParams();
    const navigate = useNavigate();

    const findData = data.todos.find((v : todoState) => v.key === Number(params.key));

    return (
        <StTodosWrapper>
            <StButton onClick = {() => navigate(-1)}>Return</StButton>
            <StKey>ID : {findData?.key}</StKey>
            <StTitle>{findData?.title}</StTitle>
            <StDesc>{findData?.desc}</StDesc>
        </StTodosWrapper>
    )
}

export default Todos;

const StTodosWrapper = styled.div`
    margin : auto;
    margin-top : 250px;
    width : 256px;
    display : flex;
    flex-direction: column;
    border : none;
    background-color : white;
    border-radius : 0.25rem;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    padding : 1rem;
`

const StButton = styled.button`
    width : 100%
    border : none;
    height : 2rem;
    border : none;
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

const StKey = styled.div`
    margin-top : 1rem;
    font-size : 1rem;
    font-weight : 900;
    color : rgb(180, 180, 180);
`

const StTitle = styled.div`
    margin-top : 0.5rem;
    font-size : 1.5rem;
    font-weight : 900;
`

const StDesc = styled.div`
    margin-top : 0.5rem;
`