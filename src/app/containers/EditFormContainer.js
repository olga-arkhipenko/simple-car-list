import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { withRouter } from 'react-router-dom';
import { editCar } from '../actionCreators';

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (EditFormContainer));