import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import "./index.css";

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

  function back() {
    history("/Equipments")
}
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

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id) {
        // Atualiza o equipamento existente
        const response = await api.put(`/Equipments/${id}`, model);
        console.log(response);
      } else {
        // Adiciona um novo equipamento
        const response = await api.post("/Equipments", model);
        console.log(response);
      }

      history("/Equipments"); // Redireciona para a página de lista de equipamentos
    } catch (error) {
      console.error("Failed to save equipment", error);
    }
  }

  return (
    <div className="container">
      <br />
      <div className="equipment-header">
        <h1>{id ? "Editar Equipamento" : "Novo Equipamento"}</h1>
        <Button variant="dark" onClick={() => back()} size="sm">
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={model.description}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <h3>Status</h3>
            <Form.Check
              type="checkbox"
              label="Disponível"
              name="status"
              checked={model.status}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
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
