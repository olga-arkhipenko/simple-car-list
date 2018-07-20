import React from 'react';
import './style.css';

const CarsRow = ({ car, onClickDelete, onClickEdit }) => {
    return (
        <tr>
            <td className="table-cell table-cell--first" > { car.brand } </td>
            <td className="table-cell" > { car.model } </td>
            <td className="table-cell" > { car.productionYear } </td>
            <td className="table-cell" > { car.engineCapacity } </td>
            <td className="table-cell" > { car.enginePower } </td>
            <td className="table-cell" > { car.price } </td>
            <td className="table-cell table-cell--last" > { car.owner } </td>
            <td className="edit-table-cell" >
                <span className="edit-table-cell__icon edit-table-cell__icon-trash" onClick={ () => onClickDelete(car) } > &#128465; </span>
            </td>
            <td className="edit-table-cell" >
                <span className="edit-table-cell__icon edit-table-cell__icon-pen" onClick={ onClickEdit }> &#128394; </span>
            </td>
        </tr>
    )
};

export default CarsRow;