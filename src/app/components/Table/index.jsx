import React from 'react';
import './index.css';
// import CarsTableHeading from '../CarsTableHeading';
// import CarsTableRow from '../CarsTableRow';

const Table = ({ tableHeading, tableBody }) => (
    <table className="table">
        <caption className="table__caption"> List of all cars </caption>
        { tableHeading }
        <tbody>
            { tableBody }
        </tbody>
    </table>
);
export default Table;
