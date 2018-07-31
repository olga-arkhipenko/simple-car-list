import React from 'react';
import './index.css';

const WeatherWidgetCover = ({ isHidden, onClick }) => {
    return (
        <div
            className="widget__cover"
            onClick={ onClick }/>
    );
};

export default WeatherWidgetCover;