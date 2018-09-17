import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.css';

const FormButton = ({ value, type, design, onClick }) => {
    const className = classNames('form-button', design);

    return (
        <input
            className={ className }
            value={ value }
            type={ type }
            onClick={ onClick }
        />
    );
};

FormButton.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    type: PropTypes.string.isRequired,
    design: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default FormButton;
