import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CarsForm from '../components/CarsForm';
import { carsActionCreators } from '../actionCreators';
import Car from '../models/car';

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

const mapDispatchToProps = () => ({
    editCar: data => carsActionCreators.editCar(data)
});

const mapStateToProps = (state, ownProps) => ({
    car: state.cars.find(car => car.id === ownProps.match.params.id) || new Car()
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCarsFormContainer));
