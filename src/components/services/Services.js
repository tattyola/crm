import React from 'react';
import CreateNewService from "./CreateNewService";
import {useDispatch, useSelector} from "react-redux";
import {Table} from "react-bootstrap";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const dispatch = useDispatch();
    const services = useSelector(state => state.services) || [];

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_SERVICE', payload: id });
    }
    return (
        <div>
            <h2>Services</h2>
            <CreateNewService/>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Employee</th>
                    <th>Price</th>
                    <th>Cost</th>

                </tr>
                </thead>
                <tbody>
                {services.map((service, index) =>
                    <ServiceCard
                        key={service.id}
                        service={service}
                        index={index}
                        onDelete={handleDelete}
                    />)
                }
                </tbody>
            </Table>

        </div>
    );
};

export default Services;
