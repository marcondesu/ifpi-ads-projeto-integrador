import React,{useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import api from "../../../services/api";

interface IEquipment {
    id:number
    nome: string;
    description: string;
    status: boolean;
    created_at:Date
    updated_at:Date
}
  

const Detail: React.FC = () => {
    const history = useNavigate()
    const { id } = useParams()
    const [equipments, setEquipments] = useState<IEquipment>()

    useEffect(() => {
        findEquipment();
    },[id])

    function back() {
        history("/Equipments");
    }

    async function findEquipment() {
        const response = await api.get<IEquipment>(`/Equipments/${id}`);
        console.log(response);
        setEquipments(response.data);
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
                <Card.Text>{equipments?.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
      </div>
    );
}

export default Detail;