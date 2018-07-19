import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import addCar from '../actions';

class FormContainer extends Component {
    render() {
        return (
            <Form onSubmit={ this.props.addCar }/>
        )
    }
};

const mapDispatchToProps = {
    addCar 
};

export default connect(null, mapDispatchToProps) (FormContainer);