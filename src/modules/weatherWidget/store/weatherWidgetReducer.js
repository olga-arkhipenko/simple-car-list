import weatherWidgetService from 'weatherWidgetModule/services/weatherWidgetService';

const REQUEST_WEATHER_DATA = 'simple-cars-list/weatherWidget/REQUEST_WEATHER_DATA';
const RECIEVE_WEATHER_DATA = 'simple-cars-list/weatherWidget/RECIEVE_WEATHER_DATA';
const FAILED_TO_FETCH = 'simple-cars-list/weatherWidget/FAILED_TO_FETCH';

const initialState = {
    weatherData: null,
    isFetching: false,
    hasErrored: false
};

const weatherWidgetReducer = (state = initialState, action) => {
    const newWeatherData = action.weatherData;

    switch (action.type) {
        case REQUEST_WEATHER_DATA:
            return {
                ...state,
                isFetching: true
            };
        case RECIEVE_WEATHER_DATA:
            return {
                weatherData: newWeatherData,
                isFetching: false
            };
        case FAILED_TO_FETCH: {
            return {
                ...state,
                hasErrored: true
            };
        }
        default:
            return state;
    }
};

const weatherWidgetActionCreators = {
    requestWeatherData: () => ({
        type: REQUEST_WEATHER_DATA
    }),
    receiveWeatherData: weatherData => ({
        type: RECIEVE_WEATHER_DATA,
        weatherData
    }),
    failedToFetch: () => ({
        type: FAILED_TO_FETCH
    })
};

const weatherWidgetAsyncActionCreators = {
    fetchWeatherData: () => dispatch => {
        dispatch(weatherWidgetActionCreators.requestWeatherData());
        return weatherWidgetService
            .fetchWeatherData()
            .then(weatherData => dispatch(weatherWidgetActionCreators.receiveWeatherData(weatherData)))
            .catch(() => dispatch(weatherWidgetActionCreators.failedToFetch()));
    }
};

export default weatherWidgetReducer;
export { weatherWidgetActionCreators, weatherWidgetAsyncActionCreators };
