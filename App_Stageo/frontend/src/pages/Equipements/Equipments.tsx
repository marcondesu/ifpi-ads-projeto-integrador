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

  // function formateDate(date:Date) {
  //   return moment(date).format("DD/MM/YYYY")
  // }
 
  function addEquipment(){
    history('/Cadastrar_equipamentos',{replace:false});
  }
  
  function updateEquipment(id:number){
    history(`/Cadastrar_equipamentos/${id}`,{replace:false});

  }

  function viewEquipment(id:number){
    history(`/Equipments/${id}`,{replace:false});

  }
  
  function reserveEquipment(id:number){
    history(`/Equipments/${id}`,{replace:false});

  }

  async function deleteEquipment(id: number) {
    try {
      await api.delete(`/Equipments/${id}`);
      loadEquipments();
    } catch (error) {
      console.error("Failed to delete equipment", error);
    }
  }



  return (
    <div className="container">
      <br />
      <div className="equipment-header" >
        <h1>Lista de Equipamentos</h1>
        
        <Button variant="dark" size="sm" onClick={addEquipment}>Adicionar Equipamento</Button>
      </div>
      <br />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Status</th>
            {/* <th>Data de criação</th> */}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((equipment) => (
            <tr key={equipment.id}>
              <td>{equipment.id}</td>
              <td>{equipment.nome}</td>
              {/* <td>{equipment.description}</td> */}
              <td>
              <Badge bg="warning">
                  
                  {equipment.status? "Disponível":"Indisponível"}
              </Badge>
                
              </td>
              {/* <td>{formateDate(equipment.create_at)}</td>  */}
              <td>
              <div className="btn-group" role="group" aria-label="Exemplo de botões separados">
                <Button size="sm" onClick={() => updateEquipment(equipment.id)}>Editar</Button>{" "}
                <Button size="sm" variant="success" onClick={() => reserveEquipment(equipment.id)}>Reservar</Button>{" "}
                <Button size="sm" variant="info" onClick={() => viewEquipment(equipment.id)}>Visualizar</Button>{" "}
                <Button size="sm" variant="danger" onClick={() => deleteEquipment(equipment.id)}>Remover</Button>{" "}

              </div>                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Equipments;
