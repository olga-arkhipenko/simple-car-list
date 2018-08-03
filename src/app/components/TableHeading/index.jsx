import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const TableHeading = ({ headings }) => {
    const headingCells = headings.map((heading, index) => (
        <th
            key={ index }
            className="table-heading__cell"
        > { heading }
        </th>
    ));

    return (
        <thead>
            <tr className="table-heading">
                { headingCells }
            </tr>
        </thead>
    );
};

TableHeading.propTypes = {
    headings: PropTypes.arrayOf(PropTypes.string)
};

export default TableHeading;
