import React from 'react';
import {Table} from "react-bootstrap";
import ClientCard from "./ClientCard";
import {useDispatch, useSelector} from "react-redux";
import CreateNewClient from "./CreateNewClient";

const Clients = () => {
    const dispatch = useDispatch();
    const clients = useSelector(state => state.clients) || [];

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_CLIENT', payload: id });
    }

    return (
        <div>
            <h2>Clients</h2>
            <CreateNewClient/>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Phone number</th>
                    <th>Created at</th>

                </tr>
                </thead>
                <tbody>
                {clients.map((client, index) =>
                    <ClientCard
                        key={client.id}
                        client={client}
                        index={index}
                        onDelete={handleDelete}
                    />)
                }
                </tbody>
            </Table>

        </div>
    );
};

export default Clients;
