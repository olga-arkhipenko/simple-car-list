import React from 'react';
import PageLink from '../PageLink';
import routes from '../../constants/routes';
import './index.css';

const CarsRow = ({ car, onClickDelete }) => (
    <tr>
        <td className="table-cell table-cell--first"> { car.brand } </td>
        <td className="table-cell"> { car.model } </td>
        <td className="table-cell"> { car.productionYear } </td>
        <td className="table-cell"> { car.engineCapacity } </td>
        <td className="table-cell"> { car.enginePower } </td>
        <td className="table-cell"> { car.price } </td>
        <td className="table-cell table-cell--last"> { car.owner } </td>
        <td className="edit-table-cell">
            <span
                className="edit-table-cell__icon edit-table-cell__icon-trash"
                onClick={() => onClickDelete(car.id)}
            >
                    &#9851;
            </span>
        </td>
        <td className="edit-table-cell">
            <PageLink path={`${ routes.EDIT_FORM }/${ car.id }`}>
                <span className="edit-table-cell__icon edit-table-cell__icon-pen">
                        &#9998;
                </span>
            </PageLink>
        </td>
    </tr>
);

export default CarsRow;
