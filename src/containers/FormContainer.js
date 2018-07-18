import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';

const addItem = (payload) => ({
    type: 'ADD_ITEM',
    payload
})

class FormContainer extends Component {
    render() {
        return (
            <Form/>
        )
    }
};

const mapDispatchToProps  = (dispatch) => ({
    addItem: (data) => dispatch(addItem(data))
});

export default connect( null, mapDispatchToProps) (FormContainer);