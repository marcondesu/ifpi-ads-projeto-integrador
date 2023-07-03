import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import api from "../../../services/api";

interface IEquipment {
    equipmentId: number;
    nome: string;
    description: string;
    image:string
}

const Detail: React.FC = () => {
    const history = useNavigate();
    const { equipmentId } = useParams();
    const [equipment, setEquipment] = useState<IEquipment | null>(null);
    const imageUrl = "../Images/drone_equipments300.png"
    useEffect(() => {
        findEquipment();
    }, [equipmentId]);

    async function findEquipment() {
        try {
            const response = await api.get<IEquipment>(`/Equipments/${equipmentId}`);
            console.log(response);
            setEquipment(response.data);
        } catch (error) {
            console.error("Failed to fetch equipment", error);
        }
    }

    function back() {
        history("/Equipments");
    }


    return (
        <div className="container">
            <br />
            <div className="equipment-header">
                <h1>Detalhes do Equipamento</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />

            <Card style={{ width: '18rem', height: '20rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={imageUrl} style={{ maxHeight: '100%', maxWidth: '100%' }}/>
                    <Card.Title>{equipment?.nome}</Card.Title>
                    <Card.Text>
                        {equipment?.description}
                        <br />
                        <br />
                        <strong>ID: </strong>
                        {equipment?.equipmentId}
                    
                        <br />
                       
                    </Card.Text>
                    {/* <Button variant="primary"></Button> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default Detail;
