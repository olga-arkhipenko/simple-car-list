import WeatherData from '../models/weatherData';
import { buildUrl } from '../../../common/utilities/buildUrl';
import { IMAGE_HOST } from './constants';

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
            sunset,
            sunrise
        } = data.data[ 0 ];

        const weatherData = new WeatherData();
        weatherData.city = city_name;
        weatherData.temperature = temp;
        weatherData.pressure = pres;
        weatherData.windDirection = wind_cdir;
        weatherData.humidityPersentage = rh;
        weatherData.cloudCoveragePersentage = clouds;
        weatherData.weatherDescription = weather.description;
        weatherData.isDay = pod === 'd';
        weatherData.sunsetTime = sunset;
        weatherData.sunriseTime = sunrise;
        weatherData.iconUrl = buildUrl(IMAGE_HOST, null, `/${ weather.icon }.png`);

        return weatherData;
    }
};

export default weatherDataMapper;
