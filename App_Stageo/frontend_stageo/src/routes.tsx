import React from "react";
import  {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Equipments from "./pages/Equipments";


const routes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/Equipments" Component={Equipments}></Route>
        </Routes>
    );
}


export default routes;