import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { todoState } from "../redux/modules/todos";

const Todos = () => {

    const data = useSelector((state : {todos : {counter : number, todos : todoState[]}}) => state.todos);
    const params = useParams();
    const navigate = useNavigate();

    const findData = data.todos.find((v : todoState) => v.key === Number(params.key));

    return (
        <div>
            <button onClick = {() => navigate(-1)}>Return</button>
            {findData?.title}, {findData?.desc}, {findData?.key}
        </div>
    )
}

export default Todos;