import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from '../containers/Form';

class FormPage extends Component {
    render() {
        return (
            <main>
                <Form/>
                <Link to="/">
                LINK
                </Link>
            </main>
        )
    }
}

export default FormPage;