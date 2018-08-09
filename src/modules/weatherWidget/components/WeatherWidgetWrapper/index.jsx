import React from 'react';
import PropTypes from 'prop-types';
import WeatherWidget from '../WeatherWidget';
import WeatherWidgetCover from '../WeatherWidgetCover';
import WeatherData from '../../models/weatherData';
import Spinner from '../../../../common/components/Spinner';
import { hasPropertyValues } from '../../../../common/utilities/hasPropertyValues';
import './index.css';

const WeatherWidgetWrapper = ({ weatherData, isFetching, fetchWeatherData }) => (
    <div className="widget-wrapper">
        { hasPropertyValues(weatherData)
            ? <WeatherWidget weatherData={ weatherData } />
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
