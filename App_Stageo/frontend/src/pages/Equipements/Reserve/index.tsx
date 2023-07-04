import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";

interface IReserve {
  nome: string;
  description: string;
  status: boolean;
}

const Reserva: React.FC = () => {
  const history = useNavigate();
  const { tombo } = useParams(); // Obtém o ID da URL

  const [model, setModel] = useState<IReserve>({
    nome: "",
    description: "",
    status: true,
  });

  useEffect(() => {
    // Verifica se é uma edição e carrega os dados do equipamento existente
    if (tombo !== undefined) {
      findEquipment(tombo);
    }
  }, [tombo]);

  async function findEquipment(tombo: string) {
    try {
      const response = await api.get(`/Equipments/${tombo}`);
      const equipmentData = response.data;
      setModel(equipmentData);
    } catch (error) {
      console.error("Failed to fetch equipment", error);
    }
  }

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  }

 

  function back() {
    history("/Equipments");
  }

  return (
    <div className="container">
      <br />
      <div className="equipment-header">
        <h1>Reserva de Equipamentos</h1>
        <Button variant="dark" onClick={back} size="sm">
          Voltar
        </Button>
      </div>
      <br />
      
    </div>
  );
};

export default Reserva;
