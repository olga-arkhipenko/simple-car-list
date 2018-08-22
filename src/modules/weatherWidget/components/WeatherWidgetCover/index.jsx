import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const WeatherWidgetCover = ({ onClick }) => (
    <div
        className="widget-cover"
        onClick={ onClick }
    />
);

WeatherWidgetCover.propTypes = {
    onClick: PropTypes.func
};

export default WeatherWidgetCover;
