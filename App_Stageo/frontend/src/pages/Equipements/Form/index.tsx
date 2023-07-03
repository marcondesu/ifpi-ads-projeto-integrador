import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Badge } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "./index.css";

interface IEquipment {
  nome: string;
  description: string;
  image:string
}

const Equipment: React.FC = () => {
  const history = useNavigate();
  const { equipmentId } = useParams(); // Obtém o ID da URL

  const [model, setModel] = useState<IEquipment>({
    nome: "",
    description: "",
    image:"Images/drone-icon.png",
  });

  useEffect(() => {
    // Verifica se é uma edição e carrega os dados do equipamento existente
    if (equipmentId !== undefined) {
      findEquipment(equipmentId);
    }
  }, [equipmentId]);

  async function findEquipment(equipmentId: string) {
    try {
      const response = await api.get(`/Equipments/${equipmentId}`);
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

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  
    try {
      if (equipmentId) {
        // Atualiza o equipamento existente
        const response = await api.put(`/Equipments/${equipmentId}`, model);
        console.log(response);
      } else {
        // Adiciona um novo equipamento
        const imageUrl = model.image; // A URL fornecida diretamente é usada como a URL real da imagem
  
        const newModel = {
          ...model,
          image: imageUrl // Atualiza o modelo com a URL real da imagem
        };
  
        const response = await api.post("/Equipments", newModel);
        console.log(response);
      }
  
      history("/Equipments"); // Redireciona para a página de lista de equipamentos
    } catch (error) {
      console.error("Failed to save equipment", error);
    }
  }
  
  

  // async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   try {
  //     if (equipmentId) {
  //       // Atualiza o equipamento existente
  //       const response = await api.put(`/Equipments/${equipmentId}`, model);
  //       console.log(response);
  //     } else {
  //       // Adiciona um novo equipamento
  //       const response = await api.post("/Equipments", model);
  //       console.log(response);
  //     }

  //     history("/Equipments"); // Redireciona para a página de lista de equipamentos
  //   } catch (error) {
  //     console.error("Failed to save equipment", error);
  //   }
  // }

  function back() {
    history("/Equipments");
  }



  return (
    <div className="container">
      <br />
      <div className="equipment-header">
        <h1>{equipmentId ? "Editar Equipamento" : "Novo Equipamento"}</h1>
        <Button variant="dark" onClick={back} size="sm">
          Voltar
        </Button>
      </div>
      <br />
      <div className="container">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="nome"
              value={model.nome}
              onChange={updateModel}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={model.description}
              onChange={updateModel}
            />
          </Form.Group>


          <Button variant="dark" type="submit">
            Salvar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Equipment;
