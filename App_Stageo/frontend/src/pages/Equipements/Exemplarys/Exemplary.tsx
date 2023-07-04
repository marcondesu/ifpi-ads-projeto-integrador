import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import { Badge, Button } from "react-bootstrap";

interface IExemplary {
  tombo: number;
  nome: string;
  equipmentId:number;
  status: boolean;
}

const Exemplary: React.FC = () => {
  const [exemplary, setExemplary] = useState<IExemplary[]>([]);
  const history = useNavigate();



  useEffect(() => {
    loadExemplarys();
  }, []);

  async function loadExemplarys() {
    try {
      const response = await api.get("/Exemplary");
      console.log(response);
      setExemplary(response.data);
    } catch (error) {
      console.error("Failed to fetch exemplary", error);
    }
  }

  function addEexemplary() {
    history("/Cadastrar_exemplary", { replace: false });
  }

  function updateExemplary(tombo: number) {
    history(`/Cadastrar_exemplary/${tombo}`, { replace: false });
  }

  function viewExemplary(tombo: number) {
    history(`/Exemplary/${tombo}`, { replace: false });
  }

  async function reserveExemplay(tombo: number) {
    try {
      await api.post(`/Exemplary/${tombo}/reserve`);
      console.log(`Exemplary ${tombo} reserved successfully.`);
      // Atualize o estado ou recarregue os equipamentos após a reserva.
      loadExemplarys();
    } catch (error) {
      console.error(`Failed to reserve exemplary ${tombo}`, error);
    }
  }

  function back() {
    history("/Equipments");
  }

  async function deleteExemplary(tombo: number) {
    try {
      await api.delete(`/Exemplary/${tombo}`);
      loadExemplarys();
    } catch (error) {
      console.error("Failed to delete exemplary", error);
    }
  }

  return (
    <div className="container">
      <br />
      <div className="equipment-header">
        <h1>Reservas deste Equipamento</h1>
        <Button variant="dark" size="sm" onClick={addEexemplary}>
          Cadastrar Reserva
        </Button>
        <Button variant="dark" onClick={back} size="sm">
          Voltar
        </Button>
        
      </div>
      <br />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Tombo</th>
            <th>Status</th>
            {/* <th>Data de criação</th> */}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {exemplary.map((exemplary) => (
            <tr key={exemplary.tombo}>
              <td>{exemplary.tombo}</td>
              {/* <td>{exemplary.description}</td> */}
              <td>
                <Badge bg={exemplary?.status ? "success" : "warning"}>
                  {exemplary?.status ? "Disponível" : "Indisponível"}
                </Badge>
              </td>
              {/* <td>{formateDate(equipment.create_at)}</td>  */}
              <td>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Exemplo de botões separados"
                >
                  <Button size="sm" onClick={() => updateExemplary(exemplary.tombo)}>
                    Editar
                  </Button>{" "}
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => reserveExemplay(exemplary.tombo)}
                  >
                    Reservar
                  </Button>{" "}
                  
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteExemplary(exemplary.tombo)}
                  >
                    Remover
                  </Button>{" "}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Exemplary;
