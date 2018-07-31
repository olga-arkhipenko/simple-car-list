import React from 'react';
import './index.css';
import TableHeading from '../TableHeading';
import CarsRow from '../CarsRow';

const Table = ({ data, headings, onClickDelete }) => {
    const tableBody = data.map(item => (
        <CarsRow
            key={ item.id }
            car={ item }
            onClickDelete={ onClickDelete }/>
    ));

    return (
        <table className="table">
            <caption className="table__caption"> List of all cars </caption>
            <TableHeading headings={ headings }/>
            <tbody>
                { tableBody }
            </tbody>
        </table>
    );
};

export default Table;