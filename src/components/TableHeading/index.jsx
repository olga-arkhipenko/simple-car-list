import React from 'react';
import './style.css';

const TableHeading = () => {
    return (
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
        </thead>
    )
};

export default TableHeading;