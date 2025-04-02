import React from 'react';
import {FaEdit, FaTrash} from "react-icons/fa";

const ClientCard = ({key, client, index, onDelete}) => {

    return (
        <>

            <tr>
                <td>{index + 1}</td>
                <td>{client.name}</td>
                <td>{client.surname}</td>
                <td>{client.address}</td>
                <td>{client.phone}</td>
                <td>{client.created}</td>
                <td>
                    <FaEdit
                        style={{cursor: "pointer", color: "blue", marginRight: "10px"}}
                    />
                    <FaTrash
                        style={{cursor: "pointer", color: "red"}}
                        onClick={() => onDelete(client.id)}
                    />
                </td>
            </tr>
        </>
    );
};

export default ClientCard;
