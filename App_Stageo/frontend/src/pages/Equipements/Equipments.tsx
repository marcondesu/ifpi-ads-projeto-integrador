import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Badge,Button } from "react-bootstrap";
import moment from "moment";
import "./Equipments.css"


interface IEquipment {
  id: number;
  nome: string;
  description: string;
  status:boolean;
  create_at: Date;
  update_at: Date;
}



const Equipments: React.FC = () => {
  const [equipments, setEquipments] = useState<IEquipment[]>([]);
  const history = useNavigate()

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

  function formateDate(date:Date) {
    return moment(date).format("DD/MM/YYYY")
  }
 
  function addEquipment(){
    history('/Cadastrar_equipamentos',{replace:false});
  }

  function editEquipments(id:number){
    history(`/Cadastrar_equipamentos/${id}}`,{replace:false});

  }


  return (
    <div className="container">
      <br />
      <div className="equipment-header" id="equipment-id-header">
        <h1>Lista de Equipamentos</h1>
        <Button variant="dark" size="sm" onClick={addEquipment}>Adicionar Equipamento</Button>
      </div>
      <br />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Data de criação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((equipment) => (
            <tr key={equipment.id}>
              <td>{equipment.id}</td>
              <td>{equipment.nome}</td>
              <td>{equipment.description}</td>
              <td>
              <Badge bg="warning">
                  
                  {equipment.status? "Disponível":"Indisponível"}
              </Badge>
                
              </td>
              <td>{formateDate(equipment.create_at)}</td>                 
              <td>
                <Button size="sm" onClick={()=> editEquipments(equipment.id)}>Editar</Button>{" "}
                <Button size="sm" variant="success">Reservar</Button>{" "}
                <Button size="sm" variant="info">Visualizar</Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Equipments;
