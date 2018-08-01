import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import weatherDataReducer from '../../features/WeatherWidget/reducers';

const rootReducer = combineReducers({
    cars: carsReducer,
    weatherData: weatherDataReducer
});

export default rootReducer;
