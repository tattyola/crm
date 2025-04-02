import React from 'react';
import {FaEdit, FaTrash} from "react-icons/fa";

const OrderCard = ({key, order, index, onDelete}) => {
    return (
        <>

            <tr>
                <td>{index + 1}</td>
                <td>{order.name}</td>
                <td>{order.service}</td>
                <td>{order.price}</td>
                <td>{order.payments}</td>
                <td>{order.debt}</td>
                <td>{order.createdAt}</td>
                <td>{order.status}</td>
                <td>{order.dates}</td>
                <td>
                    <FaEdit
                        style={{cursor: "pointer", color: "blue", marginRight: "10px"}}
                    />
                    <FaTrash
                        style={{cursor: "pointer", color: "red"}}
                        onClick={() => onDelete(order.id)}
                    />
                </td>
            </tr>
        </>
    );
};

export default OrderCard;
