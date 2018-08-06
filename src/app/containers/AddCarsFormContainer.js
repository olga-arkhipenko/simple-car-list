import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CarsForm from '../components/CarsForm';
import { carsActionCreators } from '../actionCreators';
import Car from '../models/car';

const AddCarsFormContainer = ({ addCar }) => (
    <CarsForm
        car={ new Car() }
        onSubmit={ addCar }
    />
);

AddCarsFormContainer.propTypes = {
    addCar: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    addCar: data => dispatch(carsActionCreators.addCar(data))
});

export default connect(null, mapDispatchToProps)(AddCarsFormContainer);
