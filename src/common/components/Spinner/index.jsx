import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

const Spinner = ({ type }) => {
    const className = classNames('spinner', type);
    return (
        <div className={ className }>
            <div className="spinner__item" />
            <div className="spinner__item" />
            <div className="spinner__item" />
            <div className="spinner__item" />
            <div className="spinner__item" />
            <div className="spinner__item" />
            <div className="spinner__item" />
            <div className="spinner__item" />
            <div className="spinner__item" />
            <div className="spinner__item" />
            <div className="spinner__item" />
            <div className="spinner__item" />
        </div>
    );
};

Spinner.propTypes = {
    type: PropTypes.string
};


export default Spinner;
