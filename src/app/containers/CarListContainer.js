import React from 'react';
import { connect } from 'react-redux';
import EditableTable from '../components/EditableTable';
import { carActionCreators } from '../actionCreators';
import tableHeadings from '../constants/tableHeadings';

const CarListContainer = ({ cars, deleteCar }) => (
    <EditableTable
        data={ cars }
        tableHeadings={ tableHeadings }
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
