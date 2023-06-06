import React, { ChangeEvent, useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "./index.css"
import api from "../../../services/api";


interface IEquipment {
    id:string;
    nome: string;
    description: string;
    status:boolean

}



const Equipments: React.FC = () => {
    const [model,setModel] = useState<IEquipment>({
        id:"",
        nome:"",
        description: "",
        status:true
    })


    function updateModel(e:ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

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
                <Form.Label>Descrição</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3}
                    name="description"
                    onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)}

                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
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
