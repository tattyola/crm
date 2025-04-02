import React, {useState} from 'react';
import {Button, Form, InputGroup, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";

const CreateNewService = () => {
    const initialNewService = {
        name: '',
        employee: '',
        price: '',
        cost: '',
    };
    const [show, setShow] = useState(false);
    const [newService, setNewService] = useState(initialNewService);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const onSave = () => {
        dispatch({
            type: 'CREATE_NEW_SERVICE',
            payload: {...newService, id: Math.random()}
        })
        handleClose();
        setNewService(initialNewService);
    }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create New Service
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Service</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Name
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Name"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setNewService({...newService, name: e.target.value})}
                            value={newService.name}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Employee
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Employee"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setNewService({...newService, employee: e.target.value})}
                            value={newService.employee}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Price
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Price"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setNewService({...newService, price: e.target.value})}
                            value={newService.price}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Cost
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Cost"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setNewService({...newService, cost: e.target.value})}
                            value={newService.cost}
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

export default CreateNewService;
