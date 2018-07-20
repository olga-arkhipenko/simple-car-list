import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCar, editCar } from '../actions';
import EditableTable from '../components/EditableTable';
import tableHeadings from '../constants/tableHeadings';

class EditableTableContainer extends Component {
    render() {
        return (
            <EditableTable data={ this.props.cars } tableHeadings={ tableHeadings } onClickDelete={ this.props.deleteCar } onClickEdit={ this.props.editCar }/>
        )
    }
}

const mapStateToProps = (state) => ({
    cars: state.cars
});

const mapDispatchToProps = (dispatch) => ({
    deleteCar: (id) => dispatch(deleteCar(id)),
    editCar: (id) => dispatch(editCar(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (EditableTableContainer);