import { combineReducers } from 'redux';
import carsListReducer from './carsList';
import weatherDataReducer from './weatherWidget';

const rootReducer = combineReducers({
    cars: carsListReducer,
    weatherData: weatherDataReducer
});

export default rootReducer;
