import { combineReducers } from 'redux';
import carsReducer from './cars';
import weatherWidgetReducer from './weatherWidget';

const rootReducer = combineReducers({
    cars: carsReducer,
    weatherWidget: weatherWidgetReducer
});

export default rootReducer;
