import actionTypes from './actionTypes';

const addCar = (car) => ({
    type: actionTypes.ADD_CAR,
    car
});

export default addCar;