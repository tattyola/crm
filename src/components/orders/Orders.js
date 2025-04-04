import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Table} from "react-bootstrap";
import OrderCard from "./OrderCard";
import CreateNewOrder from "./CreateNewOrder";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders) || [];

    const handleDelete = (id) => {
        dispatch({ type: 'DELETE_ORDER', payload: id });
    }

    return (
        <div>
            <h2>Orders</h2>
            <CreateNewOrder/>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Client's Name</th>
                    <th>Service</th>
                    <th>Price</th>
                    <th>Payments</th>
                    <th>Debt</th>
                    <th>Created at</th>
                    <th>Status</th>
                    <th>Date</th>

                </tr>
                </thead>
                <tbody>
                {orders.map((order, index) =>
                    <OrderCard
                        key={order.id}
                        order={order}
                        index={index}
                        onDelete={handleDelete}
                    />)
                }
                </tbody>
            </Table>

        </div>
    );
};

export default Orders;
