import React from 'react';
import { connect } from 'react-redux';
import CarsTable from '../components/CarsTable';
import { carsActionCreators } from '../actionCreators';

const CarListContainer = ({ cars, deleteCar }) => (
    <CarsTable
        cars={ cars }
        onDelete={ deleteCar }
    />
);

const mapStateToProps = state => ({
    cars: state.cars
});

const mapDispatchToProps = dispatch => ({
    deleteCar: id => dispatch(carsActionCreators.deleteCar(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarListContainer);
