import React from 'react';
import './style.css';

const FormButton = ({ value, type, style, onClick }) => {
    return (
        <input
            className={ `form-button ${style}` }
            type={ type }
            value={ value }
            onClick={ onClick }/>
    )
};

export default FormButton;