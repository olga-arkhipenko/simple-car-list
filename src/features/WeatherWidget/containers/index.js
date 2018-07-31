import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherWidget from '../components/WeatherWidget';

class WeatherWidgetContainer extends Component {
    render () {
        return (
            <WeatherWidget/>
        );
    }
};

const mapStateToProps = state => ({
    weatherData: state.weatherData
});

const mapDispatchToProps = (/*dispatch*/) => ({
    // addCar: (data) => dispatch(addCar(data))
});

export default connect(mapStateToProps, mapDispatchToProps) (WeatherWidgetContainer);
