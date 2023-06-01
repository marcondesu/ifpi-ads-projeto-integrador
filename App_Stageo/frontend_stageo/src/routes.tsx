import React from "react";
import { Link, Route } from 'react-router-dom';
import {Home} from "./pages/Home"
import Equipments from "./pages/Equipments";


const routes: React.FC = () => {
    return (
        <Route>
            <Route path="/" component={Home}></Route>
            <Route path="/Equipments" Component={Equipments}></Route>
        </Route>
    );
}