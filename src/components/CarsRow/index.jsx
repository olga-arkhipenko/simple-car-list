import React from 'react';
import './style.css';

const TableRow = ({ car }) => {
    return (
        <tr>
            <th> { car.brand } </th>
            <th> { car.model } </th>
            <th> { car.productionYear } </th>
            <th> { car.engineCapacity } </th>
            <th> { car.enginePower } </th>
            <th> { car.price } </th>
            <th> { car.owner } </th>
        </tr>
    )
};

export default TableRow;