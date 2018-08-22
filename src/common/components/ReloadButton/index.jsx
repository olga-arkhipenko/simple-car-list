import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

const ReloadButton = ({ type, onClick }) => {
    const className = classNames('reload-button', type);

    return (
        <button
            type="button"
            className={ className }
            onClick={ onClick }
        >
        &#128472;
        </button>
    );
};

ReloadButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func
};

export default ReloadButton;
