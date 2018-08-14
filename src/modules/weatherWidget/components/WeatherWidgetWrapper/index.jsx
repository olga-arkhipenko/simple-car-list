import React from 'react';
import PropTypes from 'prop-types';
import WeatherWidgetCover from 'weatherWidgetModule/components/WeatherWidgetCover';
import WeatherWidget from 'weatherWidgetModule/components/WeatherWidget';
import WeatherData from 'weatherWidgetModule/models/weatherData';
import Spinner from 'common/components/Spinner';
import { hasPropertyValues } from 'common/utilities/hasPropertyValues';
import './index.css';

const WeatherWidgetWrapper = ({ weatherData, isFetching, fetchWeatherData }) => (
    <div className="widget-wrapper">
        { hasPropertyValues(weatherData)
            ? <WeatherWidget weatherData={ weatherData } reloadWidget={ fetchWeatherData } />
            : isFetching
                ? <Spinner type="widget__spinner" />
                : <WeatherWidgetCover onClick={ fetchWeatherData } />
        }
    </div>
);

WeatherWidgetWrapper.propTypes = {
    weatherData: PropTypes.instanceOf(WeatherData),
    isFetching: PropTypes.bool,
    fetchWeatherData: PropTypes.func
};

export default WeatherWidgetWrapper;
