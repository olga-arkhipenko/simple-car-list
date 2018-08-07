import React from 'react';
import { connect } from 'react-redux';
import WeatherWidget from '../components/WeatherWidget';

const WeatherWidgetContainer = () => (
    <WeatherWidget />
);

const mapStateToProps = state => ({
    weatherData: state.weatherData
});

const mapDispatchToProps = (/* dispatch */) => ({
    // addCar: (data) => dispatch(addCar(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidgetContainer);
