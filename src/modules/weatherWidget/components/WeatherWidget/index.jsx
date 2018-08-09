import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../../models/weatherData';
import './index.css';

const WeatherWidget = ({ weatherData }) => (
    <div className="widget">
        <p>{weatherData.city}</p>
        <p>{weatherData.temperature}</p>
        <p>{weatherData.pressure}</p>
        <p>{weatherData.windDirection}</p>
        <p>{weatherData.humidityPersentage}</p>
        <p>{weatherData.cloudCoveragePersentage}</p>
        <p>{weatherData.weatherDescription}</p>
        <p>{weatherData.dayPart}</p>
        <p>{weatherData.sunsetTime}</p>
        <img src={ weatherData.iconUrl } alt="Weather icon." />
    </div>
);

WeatherWidget.propTypes = {
    weatherData: PropTypes.instanceOf(WeatherData)
};

export default WeatherWidget;
