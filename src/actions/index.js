import actionTypes from './actionTypes';
import carMapper from '../mappers/carMapper';

const addCar = (data) => {
    const car = carMapper.mapToCar(data);
    return {
        type: actionTypes.ADD_CAR,
        car
    }
};

const editCar = (data) => {
    const car = carMapper.mapToCar(data);
    return {
        type: actionTypes.EDIT_CAR,
        car
    }
};

const deleteCar = (car) => {
    return {
        type: actionTypes.DELETE_CAR,
        car
    }
};

export { addCar, deleteCar, editCar }