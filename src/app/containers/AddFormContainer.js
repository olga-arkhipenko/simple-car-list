import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { carActionCreators } from '../actionCreators';

const AddFormContainer = ({ addCar }) => (
    <Form onSubmit={addCar} />
);

const mapDispatchToProps = dispatch => ({
    addCar: data => dispatch(carActionCreators.addCar(data))
});

export default connect(null, mapDispatchToProps)(AddFormContainer);
