import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const FormButton = ({ value, type, design, onClick }) => (
    <input
        className={ `form-button ${ design }` }
        value={ value }
        type={ type }
        onClick={ onClick }
    />
);

FormButton.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    type: PropTypes.string,
    design: PropTypes.string,
    onClick: PropTypes.func
};

export default FormButton;
