import { combineReducers } from 'redux';
import carsReducer from './cars';
import weatherDataReducer from './weatherWidget';

const rootReducer = combineReducers({
    cars: carsReducer,
    weatherData: weatherDataReducer
});

export default rootReducer;
