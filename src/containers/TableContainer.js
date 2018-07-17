import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table';
import tableHeadings from '../constants/tableHeadings';

const mapStateToProps = (state) => ({
    cars: state.cars
});

class TableContainer extends Component {
    render() {
        return (
            <Table data={ this.props.cars } headings={ tableHeadings }/>
        )
    }
}

export default connect(mapStateToProps) (TableContainer);