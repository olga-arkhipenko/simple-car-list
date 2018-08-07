import { buildUrl } from '../../../utilities/buildUrl';
import { getCurrentPosition } from '../../../utilities/getCurrentPosition';
import { URL, URL_PREFIX, URL_SEGMENT, API_KEY } from '../api/constants';

const weatherWidgetService = {
    fetchWeatherData() {
        return getCurrentPosition()
            .then(position => ({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }))
            .then(coords => buildUrl(URL, URL_PREFIX, URL_SEGMENT, {
                lon: coords.longitude,
                lat: coords.latitude,
                key: API_KEY
            }))
            .then(p => console.log(p));
    }
};

export default weatherWidgetService;
