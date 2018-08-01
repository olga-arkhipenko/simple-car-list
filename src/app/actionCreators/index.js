import actionTypes from '../constants/actionTypes';
import carMapper from '../mappers/carMapper';

const addCar = data => {
    const car = carMapper.mapToCar(data);
    return {
        type: actionTypes.ADD_CAR,
        car
    };
};

const editCar = data => {
    const car = carMapper.mapToCar(data);
    return {
        type: actionTypes.EDIT_CAR,
        car
    };
};

const deleteCar = id => ({
    type: actionTypes.DELETE_CAR,
    id
});

export { addCar, deleteCar, editCar };
