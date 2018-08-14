import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeatherWidgetWrapper from 'weatherWidgetModule/components/WeatherWidgetWrapper';
import WeatherData from 'weatherWidgetModule/models/weatherData';
import { weatherWidgetAsyncActionCreators } from 'weatherWidgetModule/store/weatherWidgetReducer';

const WeatherWidgetContainer = ({ weatherData, isFetching, fetchWeatherData }) => (
    <WeatherWidgetWrapper weatherData={ weatherData } isFetching={ isFetching } fetchWeatherData={ fetchWeatherData } />
);

WeatherWidgetContainer.propTypes = {
    weatherData: PropTypes.instanceOf(WeatherData),
    isFetching: PropTypes.bool,
    fetchWeatherData: PropTypes.func
};

const mapStateToProps = state => ({
    weatherData: state.weatherWidget.weatherData || new WeatherData(),
    isFetching: state.weatherWidget.isFetching
});

const mapDispatchToProps = {
    fetchWeatherData: weatherWidgetAsyncActionCreators.fetchWeatherData
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidgetContainer);
