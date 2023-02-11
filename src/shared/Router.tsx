import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Todos from "../pages/Todos";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Home />}/>
                <Route path = '/todos/:key' element = {<Todos />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;