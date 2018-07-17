import React from 'react';
import './style.css';

const TableHeading = () => {
    return (
        <thead className="table-heading">
            <tr>
                <th className="table-heading__cell"> Marque </th>
                <th className="table-heading__cell"> Model </th>
                <th className="table-heading__cell"> Production year </th>
                <th className="table-heading__cell"> Engine capacity </th>
                <th className="table-heading__cell"> Engine power </th>
                <th className="table-heading__cell"> Price </th>
                <th className="table-heading__cell"> Owner </th>
            </tr>
        </thead>
    )
};

export default TableHeading;