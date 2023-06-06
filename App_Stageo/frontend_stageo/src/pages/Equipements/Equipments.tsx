import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import api from "../../services/api";
import format from "date-fns/format";


interface IEquipment {
  id: string;
  nome: string;
  descrição: string;
  data_criacao: Date;
  data_atualizacao: Date;
}

const Equipments: React.FC = () => {
  const [equipments, setEquipments] = useState<IEquipment[]>([]);

  useEffect(() => {
    loadEquipments();
  }, []);

  async function loadEquipments() {
    try {
      const response = await api.get('/Equipments');
      console.log(response);
      setEquipments(response.data);
    } catch (error) {
      console.error("Failed to fetch equipments", error);
    }
  }

  return (
    <div className="container">
      <br />
      <h1>Equipamentos</h1>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Data de criação</th>
            <th>Ultima Atualização</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((equipment) => (
            <tr key={equipment.id}>
              <td>{"#"}</td>
              <td>{equipment.id}</td>
              <td>{equipment.nome}</td>
              <td>{equipment.descrição}</td>
              <td>{equipment.data_criacao instanceof Date ? format(equipment.data_atualizacao, "dd/MM/yyyy") : ""}</td>                 
              <td>{equipment.data_atualizacao instanceof Date ? format(equipment.data_atualizacao, "dd/MM/yyyy") : ""}</td>                 
              <td>Ações</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Equipments;
