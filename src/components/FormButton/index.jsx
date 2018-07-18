import React from 'react';
import './style.css';

const FormButton = ({ value, type, style }) => {
    return (
        <input
            className={ `form-button ${style}` }
            type={ type }
            value={ value }/>
    )
};

export default FormButton;