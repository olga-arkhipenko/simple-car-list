import React from 'react';
import './style.css';
import FormField from '../FormField';

const Form = () => {
    return (
        <form className="form">
            <FormField name="Brand" type="text"/>
            <FormField name="Model" type="text" />
            <FormField name="Production year" type="number" />
            <FormField name="Engine capacity" type="number" />
            <FormField name="Engine power" type="number" />
            <FormField name="Price" type="number" />
            <FormField name="Owner" type="text" />
        </form>
    )
};

export default Form;