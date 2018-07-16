import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableContainer from '../containers/TableContainer'

class MainPage extends Component {
    render() {
        return (
            <main>
                <TableContainer/>
                <Link to="/form">
                LINK
                </Link>
            </main>
        )
    }
}

export default MainPage;