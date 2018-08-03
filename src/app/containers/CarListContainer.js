import React from 'react';
import { connect } from 'react-redux';
import CarsTable from '../components/CarsTable';
import { carActionCreators } from '../actionCreators';

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
    deleteCar: id => dispatch(carActionCreators.deleteCar(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarListContainer);
