import React from 'react';
import './style.css';
import TableRow from '../TableRow';

const Table = () => {
    return (
        <table>
            <caption> List of all cars </caption>
            <thead>
                <tr>
                    <th> Marque </th>
                    <th> Model </th>
                    <th> Production year </th>
                    <th> Engine capacity </th>
                    <th> Engine power </th>
                    <th> Price </th>
                    <th> Owner </th>
                </tr>
                <TableRow></TableRow>
            </thead>
        </table>
    )
};

export default Table;