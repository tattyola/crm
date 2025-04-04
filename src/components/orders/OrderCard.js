import React, {useState} from 'react';
import {FaEdit, FaTrash} from "react-icons/fa";
import UpdateOrder from "./UpdateOrder";

const OrderCard = ({key, order, index, onDelete}) => {
    const [showModal, setShowModal] = useState(false);

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
                <td>{order.date}</td>
                <td>
                    <FaEdit
                        style={{cursor: "pointer", color: "blue", marginRight: "10px"}}
                        onClick={() => setShowModal(true)}
                    />
                    <FaTrash
                        style={{cursor: "pointer", color: "red"}}
                        onClick={() => onDelete(order.id)}
                    />
                </td>
            </tr>

            <UpdateOrder
                show={showModal}
                handleClose={() => setShowModal(false)}
                order={order}
            />
        </>
    );
};

export default OrderCard;
