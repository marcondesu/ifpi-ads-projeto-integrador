import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Equipments from "./pages/Equipements/Equipments";

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Equipments" element={<Equipments />} />
        </Routes>
    );
}

export default Router;