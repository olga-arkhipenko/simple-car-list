import React from 'react';
import './index.css';

const FormButton = ({ value, type, design, onClick }) => (
    <input
        className={ `form-button ${ design }` }
        type={ type }
        value={ value }
        onClick={ onClick }
    />
);

export default FormButton;
