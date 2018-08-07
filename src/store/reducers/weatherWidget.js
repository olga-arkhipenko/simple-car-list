const REQUEST_WEATHER_DATA = 'simple-cars-list/weatherWidget/REQUEST_WEATHER_DATA';
const RECIEVE_WEATHER_DATA = 'simple-cars-list/weatherWidget/RECIEVE_WEATHER_DATA';

const initialState = {
    weatherData: {},
    isLoading: false
};

const weatherWidgetReducer = (state = initialState, action) => {
    const newWeatherData = action.weatherData;

    switch (action.type) {
        case REQUEST_WEATHER_DATA:
            return {
                ...state,
                isLoading: true
            };
        case RECIEVE_WEATHER_DATA:
            return {
                weatherData: newWeatherData,
                isLoading: false
            };
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
    })
};

const weatherWidgetAsyncActionCreators = {
    fetchWeatherData: () => dispatch => {
        dispatch(weatherWidgetActionCreators.requestWeatherData());
        return fetch('https://api.weatherbit.io/v2.0/current?lat=53.893&lon=%2027.538&key=e4af734f1fc543bfad976e64a576cff8')
            .then(response => response.json())
            .then(weatherData => dispatch(weatherWidgetActionCreators.receiveWeatherData(weatherData)));
    }
};

export default weatherWidgetReducer;
export { weatherWidgetActionCreators, weatherWidgetAsyncActionCreators };
