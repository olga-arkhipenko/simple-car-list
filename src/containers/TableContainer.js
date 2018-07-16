import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../components/Table';

const mapStateToProps = (state) => ({
    item: state.carsReducer.item
});

class TableContainer extends Component {
    render() {
        return (
            <Table/>
        )
    }
}

export default connect(mapStateToProps) (TableContainer);