import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Badge } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import "./index.css";

interface IExemplary {
  nome: string;
  description: string;
  status: boolean;
}

const Exemplary: React.FC = () => {
  const history = useNavigate();
  const { tombo } = useParams(); // Obtém o ID da URL

  const [model, setModel] = useState<IExemplary>({
    nome: "",
    description: "",
    status: true,
  });

  useEffect(() => {
    // Verifica se é uma edição e carrega os dados do equipamento existente
    if (tombo !== undefined) {
      findExemplary(tombo);
    }
  }, [tombo]);

  async function findExemplary(tombo: string) {
    try {
      const response = await api.get(`/Exemplary/${tombo}`);
      const equipmentData = response.data;
      setModel(equipmentData);
    } catch (error) {
      console.error("Failed to fetch exemplary", error);
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
      if (tombo) {
        // Atualiza o equipamento existente
        const response = await api.put(`/Exemplary/${tombo}`, model);
        console.log(response);
      } else {
        // Adiciona um novo equipamento
        const response = await api.post("/Exemplary", model);
        console.log(response);
      }

      history("/Exemplary"); // Redireciona para a página de lista de equipamentos
    } catch (error) {
      console.error("Failed to save exemplary", error);
    }
  }

  function back() {
    history("/Exemplary");
  }

  return (
    <div className="container">
      <br />
      <div className="equipment-header">
        <h1>{tombo ? "Editar Reserva" : "Nova Reserva"}</h1>
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


          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <h3>Status</h3>
            <Form.Check
              type="checkbox"
              label="Disponível"
              name="status"
              checked={model.status}
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

export default Exemplary;
