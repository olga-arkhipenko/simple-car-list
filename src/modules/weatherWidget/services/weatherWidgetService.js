import { getCurrentPosition } from '../../../common/utilities/getCurrentPosition';
import { getCoords } from '../../../common/utilities/getCoords';
import { buildUrl } from '../../../common/utilities/buildUrl';
import weatherDataMapper from '../api/weatherDataMapper';
import { URL, URL_PREFIX, URL_SEGMENT, API_KEY } from '../api/constants';
import ajaxHelper from '../../../common/helpers/ajaxHelper';

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
