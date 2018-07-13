import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from '../containers/Table'

class MainPage extends Component {
    render() {
        return (
            <main>
                <Table/>
                <Link to="/form">
                LINK
                </Link>
            </main>
        )
    }
}

export default MainPage;