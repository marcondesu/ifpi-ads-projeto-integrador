import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "./index.css"
import { useParams } from "react-router";
import api from "../../../services/api";


interface IEquipment {

    nome: string;
    description: string;
    status:boolean

}



const Equipments: React.FC = () => {
    const params = useParams()
    const [model,setModel] = useState<IEquipment>({
        nome:"",
        description: "",
        status:true
    })
    useEffect(() => {
        console.log(params)
    },[params])

    function updateModel(e:ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    const changeStatus = async (id: string, status: boolean) => {
        try {
          const response = await api.put(`/Equipments/${id}`, { status });
          console.log(response);
          // Atualize o estado ou realize qualquer ação necessária após a alteração do status
        } catch (error) {
          console.error(error);
          // Trate o erro, se necessário
        }
    };

    async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        const response = await api.post("/Equipments", model)
        console.log(response)
    }

    return (
        <div className="container">
        <br />
        <div className="equipment-header">
            <h1>Novo Equipamento</h1>
            <Button variant="dark" href="../Equipments" >Voltar</Button>
        </div>
        <br />
        <div className="container">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>ID do Equipamento</Form.Label>
                    <Form.Control 
                        type="varchar" 
                        name="id" 
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="nome" 
                        onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Status</Form.Label>
                    <br />
                    {/* <Button
                        variant="dark"
                        onClick={() => changeStatus(model.id, !model.status)}
                        
                        >
                        Alterar Status
                    </Button> */}
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Descrição</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3}
                    name="description"
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)}

                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Button variant="dark" type="submit">
                    Salvar
                </Button>
            </Form>
    
      </div>
    </div>

  );
}

export default Equipments;
