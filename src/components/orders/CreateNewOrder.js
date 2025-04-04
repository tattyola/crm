import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {InputGroupText, InputGroup, Input, FormText} from "reactstrap";

const CreateNewOrder = () => {
    const dispatch = useDispatch();
    const initialNewOrder = {
        clientId: '',
        service: '',
        price: '',
        payments: '',
        debt: '',
        status: '',
        dates: ''
    };
    const [show, setShow] = useState(false);
    const [newOrder, setNewOrder] = useState(initialNewOrder);
    const clients = useSelector((state) => state.clients);
    const services = useSelector((state) => state.services);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const date = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${month}.${day}.${year}`;
    }
    const onSave = () => {
        const debt = Number(newOrder.price) - Number(newOrder.payments);
        dispatch({

            type: 'CREATE_NEW_ORDER',
            payload: {...newOrder, id: Math.random(), createdAt: date(), debt: debt},
        })
        handleClose();
        setNewOrder(initialNewOrder);
    }
    const onChangeService = (e) => {
        setNewOrder({...newOrder,
            price: services.find(el => el.id === e.target.value).price,
            service: services.find(el => el.id === e.target.value).name
        });
    }
    const onClientChange = (e)=> {
        setNewOrder({...newOrder,
            name: clients.find(el => el.id === e.target.value).name + ' ' + clients.find(el => el.id === e.target.value).surname,
            clientId: clients.find(el => el.id === e.target.value).id,
        });
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create New Order
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Order</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroupText>
                            Service
                        </InputGroupText>
                        <Input
                            type="select"
                            value={newOrder.service}
                            onChange={onChangeService}
                        >
                            {services.map((service) => (
                                <option key={service.id} value={service.id}>{service.name} {service.price}</option>
                            ))}
                        </Input>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroupText>
                            Client
                        </InputGroupText>
                        <Input
                            type="select"
                            value={newOrder.clientId}
                            onChange={onClientChange}
                        >
                            {clients.map((client) => (
                                <option key={client.id}
                                        value={client.id}>
                                    {client.name} {client.surname}, {client.phone}
                                </option>
                            ))}
                        </Input>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroupText id="inputGroup-sizing-default">
                            Price
                        </InputGroupText>
                        <Form.Control
                            aria-label="Price"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setNewOrder({...newOrder, price: e.target.value})}
                            value={newOrder.price}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroupText id="inputGroup-sizing-default">
                            Payments
                        </InputGroupText>
                        <Form.Control
                            aria-label="Payments"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setNewOrder({...newOrder, payments: e.target.value})}
                            value={newOrder.payments}
                        />
                        <br/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <FormText className="text-muted">
                            Debt - {newOrder.price - newOrder.payments}
                        </FormText>
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroupText id="inputGroup-sizing-default">
                            Status
                        </InputGroupText>
                        <Form.Control
                            aria-label="Status"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setNewOrder({...newOrder, status: e.target.value})}
                            value={newOrder.status}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroupText id="inputGroup-sizing-default">
                            Date
                        </InputGroupText>
                        <Form.Control
                            aria-label="Date"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setNewOrder({...newOrder, date: e.target.value})}
                            value={newOrder.date}
                        />
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CreateNewOrder;
