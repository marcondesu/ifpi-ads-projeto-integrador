import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";

interface IEquipment {
  nome: string;
  description: string;
  status: boolean;
}

const Equipment: React.FC = () => {
  const history = useNavigate();
  const { id } = useParams(); // Obtém o ID da URL

  const [model, setModel] = useState<IEquipment>({
    nome: "",
    description: "",
    status: true,
  });

  useEffect(() => {
    // Verifica se é uma edição e carrega os dados do equipamento existente
    if (id !== undefined) {
      findEquipment(id);
    }
  }, [id]);

  async function findEquipment(id: string) {
    try {
      const response = await api.get(`/Equipments/${id}`);
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

export default Equipment;
