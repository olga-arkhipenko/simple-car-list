import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Form from '../components/Form';
import { carActionCreators } from '../actionCreators';

const EditFormContainer = ({ car, editCar }) => (
    <Form
        car={car}
        onSubmit={editCar}
    />
);

const mapDispatchToProps = dispatch => ({
    editCar: data => dispatch(carActionCreators.editCar(data))
});

const mapStateToProps = (state, ownProps) => ({
    car: state.cars.find(car => car.id === ownProps.match.params.id)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditFormContainer));
