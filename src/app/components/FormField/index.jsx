import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const FormField = ({ name, type, value, onChange }) => {
    const lowerCaseName = name[ 0 ].toLowerCase().concat(name.slice(1));
    const placeholderName = `Enter ${ lowerCaseName }`;

    return (
        <div className="form-field">
            <p className="form-field__name"> { name } </p>
            <input
                className="form-field__input"
                type={ type }
                value={ value }
                name={ name }
                required
                placeholder={ placeholderName }
                onChange={ onChange }
            />
        </div>
    );
};

FormField.propTypes = {
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired
};

export default FormField;
