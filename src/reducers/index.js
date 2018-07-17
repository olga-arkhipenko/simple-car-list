import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import formDataReducer from './formDataReducer';

const rootReducer =  combineReducers({
    cars: carsReducer,
    formData: formDataReducer
});

export default rootReducer;