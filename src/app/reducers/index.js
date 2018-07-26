import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import weatherWidgetReducer from '../../features/weatherWidget/reducers';

const rootReducer =  combineReducers({
    cars: carsReducer,
    weatherData: weatherWidgetReducer
});

export default rootReducer;