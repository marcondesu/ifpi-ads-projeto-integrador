import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Equipments from "./pages/Equipements/Equipments";
import EquipmentsForm from "./pages/Equipements/Form"
import EquipmentsDetail from "./pages/Equipements/Detail"
import EquipmentsReserve from "./pages/Equipements/Reserve"
import Exemplary from "./pages/Equipements/Exemplarys/Exemplary"




const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Equipments" element={<Equipments />} />
            <Route path="/Cadastrar_equipamentos" element={<EquipmentsForm />} />
            <Route path="/Cadastrar_equipamentos/:equipmentId" element={<EquipmentsForm />} />
            <Route path="/Equipments/:equipmentId" element={<EquipmentsDetail/>} />
            <Route path="/Equipments/:equipmentId" element={<EquipmentsReserve/>} />
            <Route path="/Exemplary" element={<Exemplary />} />
            {/* <Route path="/Exemplary/:tombo" element={<ExemplaryForm />} /> */}

        </Routes>
    );
}

export default Router;