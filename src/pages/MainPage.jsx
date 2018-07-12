import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPage extends Component {
    render() {
        return (
            <main>
                Hello from Main!
                <Link to="/">
                    <span> Home </span>
                </Link>
                <Link to="/form">
                    <span> From </span>
                </Link>
            </main>
        )
    }
}

export default MainPage;