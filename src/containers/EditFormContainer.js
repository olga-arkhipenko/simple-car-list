import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { editCar } from '../actions';

class EditFromContainer extends Component {
    render() {
        return (
            <Form onSubmit={ this.props.editCar }/>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    editCar: (data) => dispatch(editCar(data))
});

export default connect(null, mapDispatchToProps) (EditFromContainer);