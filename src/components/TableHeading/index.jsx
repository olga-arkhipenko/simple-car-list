import React from 'react';
import './style.css';

const TableHeading = ({ headings }) => {
    const headingCells = headings.map((heading, index) => <th key={ index } className="table-heading__cell"> { heading } </th>);

    return (
        <thead className="table-heading">
            <tr>
                { headingCells }
            </tr>
        </thead>
    )
};

export default TableHeading;