import WeatherData from '../models/weatherData';

const mapToWeatherData = data => {
    const {
        city,
        temperature,
        pressure,
        windDirection,
        humidityPersentage,
        cloudCoveragePersentage,
        weatherDescription,
        dayPart,
        sunsetTime,
        iconCode
    } = data;

    const weatherData = new WeatherData();
    weatherData.city = city;
    weatherData.temperature = temperature;
    weatherData.pressure = pressure;
    weatherData.windDirection = windDirection;
    weatherData.humidityPersentage = humidityPersentage;
    weatherData.cloudCoveragePersentage = cloudCoveragePersentage;
    weatherData.weatherDescription = weatherDescription;
    weatherData.dayPart = dayPart;
    weatherData.sunsetTime = sunsetTime;
    weatherData.iconCode = iconCode;
    return weatherData;
};

export default mapToWeatherData;
