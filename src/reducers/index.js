import { combineReducers } from 'redux';
import cars from './cars';
import formData from './formData';

const rootReducer =  combineReducers({
    cars,
    formData
});

export default rootReducer;