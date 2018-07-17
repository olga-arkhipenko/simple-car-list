import React from 'react';
import './style.css';
import FormField from '../FormField';
import FormButton from '../FormButton';

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
            <div className="form__actions">
                <FormButton value="Add" type="submit" style="accept" />
                <FormButton value="Cancel" type="reset" style="cancel" />
            </div>
        </form>
    )
};

export default Form;