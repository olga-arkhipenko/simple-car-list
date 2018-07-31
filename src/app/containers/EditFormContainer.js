import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { editCar } from '../actions';

class EditFormContainer extends Component {
    render () {
        return (
            <Form
                car={ this.props.car }
                onSubmit={ this.props.editCar }/>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    editCar: data => dispatch(editCar(data))
});

const mapStateToProps = (state, ownProps) => ({
    car: state.cars.find(car => car.id === ownProps.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps) (EditFormContainer);