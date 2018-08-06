import actionTypes from '../constants/actionTypes';
import carMapper from '../mappers/carMapper';

const carActionCreators = {
    addCar: data => {
        const car = carMapper.mapToCar(data);
        return {
            type: actionTypes.ADD_CAR,
            car
        };
    },

    editCar: data => {
        const car = carMapper.mapToCar(data);
        return {
            type: actionTypes.EDIT_CAR,
            car
        };
    },

    deleteCar: id => ({
        type: actionTypes.DELETE_CAR,
        id
    })
};

export default carActionCreators;
