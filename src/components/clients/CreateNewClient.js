import React, {useState} from 'react';
import {Button, InputGroup, Modal, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";

const CreateNewClient = () => {
    const initialNewClient = {
        name: '',
        surname: '',
        address: '',
        phone: '',
    };
    const [show, setShow] = useState(false);
    const [newClient, setNewClient] = useState(initialNewClient);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const date = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${month}.${day}.${year}`;
    }
    const onSave = () => {
        dispatch({
            type: 'CREATE_NEW_CLIENT',
            payload: {...newClient, id: Math.random(), created: date(), phone: `+1${newClient.phone}`}
        })
        handleClose();
        setNewClient(initialNewClient);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create New Client
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Client</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            First name
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="First name"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                            value={newClient.name}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Last name
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Last name"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setNewClient({...newClient, surname: e.target.value})}
                            value={newClient.surname}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Address
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Address"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setNewClient({...newClient, address: e.target.value})}
                            value={newClient.address}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Phone number
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Phone number"
                            aria-describedby="inputGroup-sizing-default"
                            type="number"
                            onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                            value={newClient.phone}
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
    )
};

export default CreateNewClient;
