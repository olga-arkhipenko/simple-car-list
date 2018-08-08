import WeatherData from '../models/weatherData';

const weatherDataMapper = {
    mapToWeatherData(data) {
        const {
            city_name,
            temp,
            pres,
            wind_cdir,
            rh,
            clouds,
            weather,
            pod,
            sunset
        } = data.data[ 0 ];

        const weatherData = new WeatherData();
        weatherData.city = city_name;
        weatherData.temperature = temp;
        weatherData.pressure = pres;
        weatherData.windDirection = wind_cdir;
        weatherData.humidityPersentage = rh;
        weatherData.cloudCoveragePersentage = clouds;
        weatherData.weatherDescription = weather.description;
        weatherData.dayPart = pod;
        weatherData.sunsetTime = sunset;
        weatherData.iconCode = weather.icon;
        return weatherData;
    }
};

export default weatherDataMapper;
