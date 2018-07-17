import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditableTable from '../components/EditableTable';
import tableHeadings from '../constants/tableHeadings';

const mapStateToProps = (state) => ({
    cars: state.cars
});

class EditableTableContainer extends Component {
    render() {
        return (
            <EditableTable data={ this.props.cars } tableHeadings={ tableHeadings }/>
        )
    }
}

export default connect(mapStateToProps) (EditableTableContainer);