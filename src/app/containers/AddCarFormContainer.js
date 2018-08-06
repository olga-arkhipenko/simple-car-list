import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { carsActionCreators } from '../actionCreators';
import Car from '../models/car';

const AddCarFormContainer = ({ addCar }) => (
    <Form
        car={ new Car() }
        onSubmit={ addCar }
    />
);

const mapDispatchToProps = dispatch => ({
    addCar: data => dispatch(carsActionCreators.addCar(data))
});

export default connect(null, mapDispatchToProps)(AddCarFormContainer);
