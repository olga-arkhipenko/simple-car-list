import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeatherWidget from '../components/WeatherWidget';
import WeatherWidgetCover from '../components/WeatherWidgetCover';
import WeatherData from '../models/weatherData';
import { weatherWidgetAsyncActionCreators } from '../store/weatherWidgetReducer';
import { hasPropertyValues } from '../../../common/utilities/hasPropertyValues';

const WeatherWidgetContainer = ({ weatherData, fetchWeatherData }) => (
    <Fragment>
        { hasPropertyValues(weatherData)
            ? <WeatherWidget weatherData={ weatherData } />
            : <WeatherWidgetCover onClick={ fetchWeatherData } />
        }
    </Fragment>
);

WeatherWidgetContainer.propTypes = {
    weatherData: PropTypes.instanceOf(WeatherData),
    fetchWeatherData: PropTypes.func
};

const mapStateToProps = state => ({
    weatherData: state.weatherWidget.weatherData || new WeatherData()
});

const mapDispatchToProps = {
    fetchWeatherData: weatherWidgetAsyncActionCreators.fetchWeatherData
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidgetContainer);
