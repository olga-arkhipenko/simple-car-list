import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = (state) => ({
    item: state.carsReducer.item
});

class TableContainer extends Component {
    render() {
        return (
            <Form/>
        )
    }
}

export default connect(mapStateToProps) (TableContainer);