import React from 'react';
import './style.css';

const FormField = ({ name, type, value, onChange }) => {
    const lowerCaseName = name[0].toLowerCase().concat(name.slice(1));

    return (
        <div className="form-field">
            <p className="form-field__name"> { name } </p>
            <input
                className="form-field__input"
                type={ type }
                value={ value }
                name={ name }
                required
                placeholder={`Enter ${ lowerCaseName }` }
                onChange={ onChange }/>
        </div>
    )
};

export default FormField;