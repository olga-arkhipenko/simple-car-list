import React from 'react';
import './style.css';
import TableHeading from '../TableHeading';
import TableRow from '../TableRow';

const Table = () => {
    return (
        <table>
            <caption> List of all cars </caption>
            <TableHeading/>
            <tbody>
                <TableRow></TableRow>
            </tbody>
        </table>
    )
};

export default Table;