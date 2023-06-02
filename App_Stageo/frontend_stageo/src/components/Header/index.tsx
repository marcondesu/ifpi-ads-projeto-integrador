import React from "react";
import { Navbar,Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" expand='lg'>
            <Navbar.Brand href="#home">STAGEO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nr-auto">
                    <Nav.Item as={Link} to="/" className="nav-link">Inicio</Nav.Item>
                    <Nav.Item as={Link} to="/Equipments" className="nav-link">Equipamentos</Nav.Item>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )

}

export default Header;