import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import api from "../../services/api";

const Equipments: React.FC = () => {

    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        loadEquipments();

    }, []);

    const loadEquipments = async () => {
        const response = await api.get('/Equipments');
        console.log(response);
        setEquipments(response.data);
    };

    return (
        <div className="container">
            <h1>Equipments pages</h1>
            <Table>
                <caption>Awesome caption</caption>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Data de atualização</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Body content 1</td>
                        <td>Body content 2</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Footer content 1</td>
                        <td>Footer content 2</td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
};

export default Equipments;