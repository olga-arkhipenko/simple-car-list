import { getCurrentPosition } from '../../../utilities/getCurrentPosition';
import { getCoords } from '../../../utilities/getCoords';
import { buildUrl } from '../../../utilities/buildUrl';
import weatherDataMapper from '../api/weatherDataMapper';
import { URL, URL_PREFIX, URL_SEGMENT, API_KEY } from '../api/constants';
import ajaxHelper from '../../../helpers/ajaxHelper';

const weatherWidgetService = {
    fetchWeatherData() {
        return getCurrentPosition()
            .then(position => getCoords(position))
            .then(coords => buildUrl(URL, URL_PREFIX, URL_SEGMENT, {
                lon: coords.longitude,
                lat: coords.latitude,
                key: API_KEY
            }))
            .then(url => ajaxHelper.get(url))
            .then(data => weatherDataMapper.mapToWeatherData(data));
    }
};

export default weatherWidgetService;
