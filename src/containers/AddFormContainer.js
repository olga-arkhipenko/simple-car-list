import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { addCar } from '../actions';

class AddFormContainer extends Component {
    render() {
        return (
            <Form onSubmit={ this.props.addCar }/>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    addCar: (data) => dispatch(addCar(data))
});

export default connect(null, mapDispatchToProps) (AddFormContainer);