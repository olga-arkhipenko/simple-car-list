import React from 'react';
import './style.css';

const FormField = ({ name, type }) => {
    const lowerCaseName = name.slice(0, 1).toLowerCase().concat(name.slice(1));

    return (
        <label className="form-field">
            <p className="form-field__name"> { name } </p>
            <input
                className="form-field__input"
                type={ type }
                required
                placeholder={`Enter ${ lowerCaseName }` }/>
        </label>
    )
};

export default FormField;