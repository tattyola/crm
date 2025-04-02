import React, {useState} from 'react';
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import {NavLink, Route, Routes} from "react-router-dom";
// import Home from "../pages/Home";
import Clients from "./clients/Clients";
import Services from "./services/Services";
import Orders from "./orders/Orders";

const NavBar = () => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>

                    <Navbar.Brand href="/">
                        <img
                            src='/logo.jpeg'
                            alt="logo"
                            height='50'
                            width='80'
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/*<Nav.Link to="/" as={NavLink}>Home</Nav.Link>*/}
                            <Nav.Link to="/clients" as={NavLink}>Clients</Nav.Link>
                            <Nav.Link to="/orders" as={NavLink}>Orders</Nav.Link>
                            <Nav.Link to="/services" as={NavLink}>Services</Nav.Link>
                        </Nav>

                        <Form inline='true' className='d-flex justify-content-center'>
                            <Form.Control

                                placeholder="Search..."
                                type='text'
                                className='me-md-2'
                                onChange={handleSearch}
                            />

                        </Form>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

            <Routes>
                {/*<Route path='/' element={<Home/>}/>*/}
                <Route path='/clients' element={<Clients/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/services' element={<Services searchText={searchText}/>}/>
            </Routes>
        </>
    );
};

export default NavBar;
