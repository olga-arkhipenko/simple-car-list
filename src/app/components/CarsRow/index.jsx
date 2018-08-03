import React from 'react';
import PageLink from '../PageLink';
import routes from '../../constants/routes';
import { getUrlByTemplate } from '../../../utilities/getUrlByTemplate';
import './index.css';

const CarsRow = ({ car, onDelete }) => {
    const {
        id,
        brand,
        model,
        productionYear,
        engineCapacity,
        enginePower,
        price,
        owner
    } = car;

    const carEditUrl = getUrlByTemplate(routes.EDIT_FORM, { id });

    return (
        <tr>
            <td className="table-cell table-cell--first"> { brand } </td>
            <td className="table-cell"> { model } </td>
            <td className="table-cell"> { productionYear } </td>
            <td className="table-cell"> { engineCapacity } </td>
            <td className="table-cell"> { enginePower } </td>
            <td className="table-cell"> { price } </td>
            <td className="table-cell table-cell--last"> { owner } </td>
            <td className="edit-table-cell">
                <span
                    className="edit-table-cell__icon edit-table-cell__icon-trash"
                    onClick={ () => onDelete(id) }
                >
                    &#9851;
                </span>
            </td>
            <td className="edit-table-cell">
                <PageLink path={ carEditUrl }>
                    <span className="edit-table-cell__icon edit-table-cell__icon-pen">
                        &#9998;
                    </span>
                </PageLink>
            </td>
        </tr>
    );
};

export default CarsRow;
