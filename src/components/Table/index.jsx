import React from 'react';
import './style.css';
import TableHeading from '../TableHeading';
import TableRow from '../TableRow';

const Table = () => {
    return (
        <table>
            <caption> List of all cars </caption>
            <thead>
                <TableHeading/>
                <TableRow></TableRow>
            </thead>
        </table>
    )
};

export default Table;