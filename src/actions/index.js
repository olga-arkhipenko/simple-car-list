import actionTypes from './actionTypes';
import carMapper from '../mappers/carMapper';

const addCar = (data) => {
    const car = carMapper.mapToCar(data);
    return {
        type: actionTypes.ADD_CAR,
        car
    }
};

export default addCar;