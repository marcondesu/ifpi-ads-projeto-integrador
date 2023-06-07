import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Equipments from "./pages/Equipements/Equipments";
import EquipmentsForm from "./pages/Equipements/Form"


const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Equipments" element={<Equipments />} />
            <Route path="/Cadastrar_equipamentos" element={<EquipmentsForm />} />
            <Route path="/Cadastrar_equipamentos/:id" element={<EquipmentsForm />} />
        </Routes>
    );
}

export default Router;