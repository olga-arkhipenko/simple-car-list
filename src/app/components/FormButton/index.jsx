import React from 'react';
import './style.css';

const FormButton = ({ value, type, design, onClick }) => {
    return (
        <input
            className={ `form-button ${ design }` }
            type={ type }
            value={ value }
            onClick={ onClick }/>
    );
};

export default FormButton;