import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCar } from '../actions';
import EditableTable from '../components/EditableTable';
import tableHeadings from '../constants/tableHeadings';

class EditableTableContainer extends Component {
    render() {
        return (
            <EditableTable data={ this.props.cars } tableHeadings={ tableHeadings } onClickDelete={ this.props.deleteCar }/>
        )
    }
}

const mapStateToProps = (state) => ({
    cars: state.cars
});

const mapDispatchToProps = (dispatch) => ({
    deleteCar: (id) => dispatch(deleteCar(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (EditableTableContainer);