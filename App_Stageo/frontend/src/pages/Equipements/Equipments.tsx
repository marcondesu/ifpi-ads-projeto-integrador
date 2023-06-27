import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Badge, Button } from "react-bootstrap";
import "./Equipments.css";

interface IEquipment {
  equipmentId: number;
  nome: string;
  description: string;
  image:string;
}

const Equipments: React.FC = () => {
  const [equipments, setEquipments] = useState<IEquipment[]>([]);
  const history = useNavigate();

  useEffect(() => {
    loadEquipments();
  }, []);

  async function loadEquipments() {
    try {
      const response = await api.get("/Equipments");
      console.log(response);
      setEquipments(response.data);
    } catch (error) {
      console.error("Failed to fetch equipments", error);
    }
  }

  function addEquipment() {
    history("/Cadastrar_equipamentos", { replace: false });
  }

  function updateEquipment(equipmentId: number) {
    history(`/Cadastrar_equipamentos/${equipmentId}`, { replace: false });
  }

  function viewEquipment(equipmentId: number) {
    history(`/Equipments/${equipmentId}`, { replace: false });
  }

  async function deleteEquipment(equipmentId: number) {
    try {
      await api.delete(`/Equipments/${equipmentId}`);
      loadEquipments();
    } catch (error) {
      console.error("Failed to delete equipment", error);
    }
  }

  return (
    <div className="container">
      <br />
      <div className="equipment-header">
        <h1>Lista de Equipamentos</h1>
        <Button variant="dark" size="sm" onClick={addEquipment}>
          Adicionar Equipamento
        </Button>
      </div>
      <br />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            {/* <th>Data de criação</th> */}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((equipment) => (
            <tr key={equipment.equipmentId}>
              <td>{equipment.equipmentId}</td>
              <td>{equipment.nome}</td>
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Exemplo de botões separados"
                >
                  <Button size="sm" onClick={() => updateEquipment(equipment.equipmentId)}>
                    Editar
                  </Button>{" "}
                  <Button
                    size="sm"
                    variant="info"
                    onClick={() => viewEquipment(equipment.equipmentId)}
                  >
                    Visualizar
                  </Button>{" "}
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteEquipment(equipment.equipmentId)}
                  >
                    Remover
                  </Button>{" "}
                </div>
                <Button
                  className="btn-group"
                  role="group"
                  aria-label="Exemplo de botões separados"
                >
                  
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    </div>
  );
};

export default Equipments;
