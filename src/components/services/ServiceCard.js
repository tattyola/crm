import React from 'react';
import {FaEdit, FaTrash} from "react-icons/fa";

const ServiceCard = ({key, service, index, onDelete}) => {
    return (
        <>

            <tr>
                <td>{index + 1}</td>
                <td>{service.name}</td>
                <td>{service.employee}</td>
                <td>{service.price}</td>
                <td>{service.cost}</td>

                <td>
                    <FaEdit
                        style={{cursor: "pointer", color: "blue", marginRight: "10px"}}
                    />
                    <FaTrash
                        style={{cursor: "pointer", color: "red"}}
                        onClick={() => onDelete(service.id)}
                    />
                </td>
            </tr>
        </>
    );
};

export default ServiceCard;
