import { combineReducers } from 'redux';
import carsReducer from 'carsModule/store/carsReducer';
import weatherWidgetReducer from 'weatherWidgetModule/store/weatherWidgetReducer';

const rootReducer = combineReducers({
    cars: carsReducer,
    weatherWidget: weatherWidgetReducer
});

export default rootReducer;
