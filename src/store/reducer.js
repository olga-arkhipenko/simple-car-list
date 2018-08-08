import { combineReducers } from 'redux';
import carsReducer from '../modules/cars/store/carsReducer';
import weatherWidgetReducer from '../modules/weatherWidget/store/weatherWidgetReducer';

const rootReducer = combineReducers({
    cars: carsReducer,
    weatherWidget: weatherWidgetReducer
});

export default rootReducer;
