import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Table = ({ tableHeading, tableBody }) => (
    <table className="table">
        <caption className="table__caption"> List of all cars </caption>
        { tableHeading }
        <tbody>
            { tableBody }
        </tbody>
    </table>
);

Table.propTypes = {
    tableHeading: PropTypes.element,
    tableBody: PropTypes.arrayOf(PropTypes.element)
};

export default Table;
