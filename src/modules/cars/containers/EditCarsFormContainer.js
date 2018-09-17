import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CarsForm from 'carsModule/components/CarsForm';

import Car from 'carsModule/models/car';
import { carsActionCreators } from 'carsModule/store/carsReducer';

const EditCarsFormContainer = ({ car, editCar }) => (
    <CarsForm
        car={ car }
        onSubmit={ editCar }
    />
);

EditCarsFormContainer.propTypes = {
    car: PropTypes.instanceOf(Car).isRequired,
    editCar: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
    car: state.cars.find(car => car.id === ownProps.match.params.id) || new Car()
});

const mapDispatchToProps = {
    editCar: carsActionCreators.editCar
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCarsFormContainer));
