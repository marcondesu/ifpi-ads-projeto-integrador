import React,{useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import api from "../../../services/api";
import moment from "moment";

interface IEquipment {
    equipmentId:number
    nome: string;
    description: string;
    status: boolean;
    create_at:Date
    update_at:Date
}
  

const Detail: React.FC = () => {
    const history = useNavigate()
    const { equipmentId } = useParams()
    const [equipments, setEquipments] = useState<IEquipment>()

    useEffect(() => {
        findEquipment();
    },[equipmentId])

    function back() {
        history("/Equipments");
    }

    async function findEquipment() {
        const response = await api.get<IEquipment>(`/Equipments/${equipmentId}`);
        console.log(response);
        setEquipments(response.data);
    }

    
  function formatDate(date:Date) {
    return moment(date).format("DD/MM/YYYY")
  }

    return (
        <div className="container">
        <br />
        <div className="equipment-header">
            <h1>Detalhes do Equipamento</h1>
            <Button variant="dark" size="sm" onClick={() => back()}>Voltar</Button>
        </div>
        <br />

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{equipments?.nome}</Card.Title>
                <Card.Text>
                    {equipments?.description}
                    <br />
                    <Badge bg={equipments?.status ? "success":"warning"}>
                        {equipments?.status ? "Disponível": "Indisponível"}
                    </Badge>
                    <br />
                    <strong>Data de cadastro:{" "}
                        {equipments?.create_at && (
                            <Badge bg="info">
                                {formatDate(equipments.create_at)}
                            </Badge>
                        )}
                    </strong>
                    <br />
                    <strong>Data de atualização:{" "}
                        {equipments?.update_at && (
                            <Badge bg="info">
                                {formatDate(equipments.update_at)}
                            </Badge>
                        )}
                    </strong>

                  
                    </Card.Text>
                {/* <Button variant="primary"></Button> */}
            </Card.Body>
        </Card>
      </div>
    );
}

export default Detail;