import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CarsForm from 'carsModule/components/CarsForm';

import Car from 'carsModule/models/car';
import { carsActionCreators } from 'carsModule/store/carsReducer';

const AddCarsFormContainer = ({ addCar }) => (
    <CarsForm
        car={ new Car() }
        onSubmit={ addCar }
    />
);

AddCarsFormContainer.propTypes = {
    addCar: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    addCar: carsActionCreators.addCar
};

export default connect(null, mapDispatchToProps)(AddCarsFormContainer);
