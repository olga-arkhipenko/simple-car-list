import React from 'react';
import './style.css';

const FormField = ({ name, type, value }) => {
    const lowerCaseName = name.slice(0, 1).toLowerCase().concat(name.slice(1));

    return (
        <div className="form-field">
            <p className="form-field__name"> { name || '' } </p>
            <input
                className="form-field__input"
                type={ type || '' }
                value={ value || '' }
                required
                placeholder={`Enter ${ lowerCaseName }` }/>
        </div>
    )
};

export default FormField;