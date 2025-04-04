import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Modal} from "react-bootstrap";
import {InputGroupText, InputGroup, FormText, Input} from "reactstrap";

const UpdateOrder = ({ show, handleClose, order }) => {
    const [updatedOrder, setUpdatedOrder] = useState({ ...order });
    const dispatch = useDispatch();
    const services = useSelector((state) => state.services);

    const onChangeService = (e) => {
        setUpdatedOrder({...updatedOrder,
            price: services.find(el => el.id === e.target.value).price,
            service: services.find(el => el.id === e.target.value).name
        });
    }
    const onSave = () => {
        dispatch({ type: "UPDATE_ORDER", payload: updatedOrder });
        handleClose();
    };
console.log(updatedOrder)
    Object.entries(updatedOrder).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update {updatedOrder.name}'s Order</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroupText>Service</InputGroupText>
                    <Form.Select
                        type="select"
                        value={updatedOrder.service}
                        onChange={onChangeService}
                    >
                        {services.map((service) => (
                            <option key={service.id} value={service.id}>{service.name} {service.price}</option>
                        ))}
                    </Form.Select>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroupText>Price</InputGroupText>
                    <Form.Control
                        type="number"
                        value={updatedOrder.price}
                        onChange={(e) => setUpdatedOrder({ ...updatedOrder, price: e.target.value })}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroupText>Payments</InputGroupText>
                    <Form.Control
                        type="number"
                        value={updatedOrder.payments}
                        onChange={(e) => setUpdatedOrder({ ...updatedOrder, payments: e.target.value })}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormText className="text-muted">
                        Debt - {updatedOrder.price - updatedOrder.payments}
                    </FormText>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroupText>Status</InputGroupText>
                    <Form.Control
                        type="text"
                        value={updatedOrder.status}
                        onChange={(e) => setUpdatedOrder({ ...updatedOrder, status: e.target.value })}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroupText>Date</InputGroupText>
                    <Form.Control
                        type="text"
                        value={updatedOrder.date}
                        onChange={(e) => setUpdatedOrder({ ...updatedOrder, date: e.target.value })}
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
    );
};

export default UpdateOrder;
