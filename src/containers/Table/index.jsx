import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <caption> List of all cars </caption>
                <thead>
                    <tr>
                        <th> Marque </th>
                        <th> Model </th>
                        <th> Production year</th>
                        <th> Engine capacity </th>
                        <th> Engine power </th>
                        <th> Price </th>
                        <th> Owner </th>
                    </tr>
                </thead>
            </table>
        )
    }
}

export default Table;