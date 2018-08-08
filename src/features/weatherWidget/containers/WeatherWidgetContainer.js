import React from 'react';
import { connect } from 'react-redux';
import WeatherWidget from '../components/WeatherWidget';
import { weatherWidgetAsyncActionCreators } from '../../../store/reducers/weatherWidget';

const WeatherWidgetContainer = ({ ftch }) => (
    <WeatherWidget ftch={ ftch } />
);

const mapStateToProps = state => ({
    weatherData: state.weatherData
});

const mapDispatchToProps = {
    ftch: weatherWidgetAsyncActionCreators.fetchWeatherData
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidgetContainer);
