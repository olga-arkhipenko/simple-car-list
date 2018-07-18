import React from 'react';
import './style.css';

const CarsRow = ({ car }) => {
    return (
        <tr>
            <td className="table-cell table-cell--first" > { car.brand } </td>
            <td className="table-cell" > { car.model } </td>
            <td className="table-cell" > { car.productionYear } </td>
            <td className="table-cell" > { car.engineCapacity } </td>
            <td className="table-cell" > { car.enginePower } </td>
            <td className="table-cell" > { car.price } </td>
            <td className="table-cell table-cell--last" > { car.owner } </td>
        </tr>
    )
};

export default CarsRow;