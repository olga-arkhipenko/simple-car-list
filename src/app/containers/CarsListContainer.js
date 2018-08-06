import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CarsTable from '../components/CarsTable';
import Car from '../models/car';
import { carsActionCreators } from '../actionCreators';

const CarsListContainer = ({ cars, deleteCar }) => (
    <CarsTable
        cars={ cars }
        onDelete={ deleteCar }
    />
);

CarsListContainer.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.instanceOf(Car)).isRequired,
    deleteCar: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    cars: state.cars
});

const mapDispatchToProps = dispatch => ({
    deleteCar: id => dispatch(carsActionCreators.deleteCar(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarsListContainer);
