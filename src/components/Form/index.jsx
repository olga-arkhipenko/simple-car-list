import React from 'react';
import './style.css';
import FormField from '../FormField';
import FormButton from '../FormButton';

const Form = () => {
    return (
        <form className="form">
            <FormField name="Brand" type="text" value="" />
            <FormField name="Model" type="text" value="" />
            <FormField name="Production year" type="number" value="" />
            <FormField name="Engine capacity" type="number" value="" />
            <FormField name="Engine power" type="number" value="" />
            <FormField name="Price" type="number" value="" />
            <FormField name="Owner" type="text" value="" />
            <div className="form__actions">
                <FormButton value="Submit" type="submit" style="accept" />
                <FormButton value="Cancel" type="reset" style="cancel" />
            </div>
        </form>
    )
};

export default Form;