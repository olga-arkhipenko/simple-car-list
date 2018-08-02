import React from 'react';
import { connect } from 'react-redux';
import EditableTable from '../components/EditableTable';
import { carActionCreators } from '../actionCreators';
import tableHeadings from '../constants/tableHeadings';

const EditableTableContainer = ({ cars, deleteCar }) => (
    <EditableTable
        data={ cars }
        tableHeadings={ tableHeadings }
        onClickDelete={ deleteCar }
    />
);

const mapStateToProps = state => ({
    cars: state.cars
});

const mapDispatchToProps = dispatch => ({
    deleteCar: id => dispatch(carActionCreators.deleteCar(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditableTableContainer);
