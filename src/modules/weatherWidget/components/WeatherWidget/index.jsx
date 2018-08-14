import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WeatherData from 'weatherWidgetModule/models/weatherData';
import ReloadButton from 'common/components/ReloadButton';
import './index.css';

const WeatherWidget = ({ weatherData, reloadWidget }) => {
    const className = classNames('widget', { 'widget--day': weatherData.isDay, 'widget--night': !weatherData.isDay });
    return (
        <div className={ className }>
            <div className="widget__header">
                <div className="wiget__main-properties">
                    <p className="widget__main-property widget__main-property--city"> { weatherData.city } </p>
                    <p className="widget__main-property widget__main-property--description"> { weatherData.weatherDescription} </p>
                    <p className="widget__main-property widget__main-property--temperature"> { weatherData.temperature } °C </p>
                </div>
                <img src={ weatherData.iconUrl } alt="Weather icon." className="widget__image" />
            </div>
            <p className="widget__property"> Pressure:&nbsp;
                <span className="widget__property-value">
                    { weatherData.pressure } mb
                </span>
            </p>
            <p className="widget__property"> Wind direction:&nbsp;
                <span className="widget__property-value">
                    { weatherData.windDirection }
                </span>
            </p>
            <p className="widget__property"> Humidity:&nbsp;
                <span className="widget__property-value">
                    { weatherData.humidityPersentage }%
                </span>
            </p>
            <p className="widget__property"> Clouds:&nbsp;
                <span className="widget__property-value">
                    { weatherData.cloudCoveragePersentage }%
                </span>
            </p>
            <p className="widget__property"> Sunset:&nbsp;
                <span className="widget__property-value">
                    { weatherData.sunsetTime }
                </span>
            </p>
            <p className="widget__property"> Sunrise:&nbsp;
                <span className="widget__property-value">
                    { weatherData.sunriseTime }
                </span>
            </p>
            <ReloadButton type="widget__reload-button" onClick={ reloadWidget } />
        </div>
    );
};

WeatherWidget.propTypes = {
    weatherData: PropTypes.instanceOf(WeatherData),
    reloadWidget: PropTypes.func
};

export default WeatherWidget;
