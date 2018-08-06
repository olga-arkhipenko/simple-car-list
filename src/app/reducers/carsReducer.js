import actionTypes from '../constants/actionTypes';
import { zipObjects } from '../../utilities/zipObjects';

const initialState = [];

const carReducer = (state = initialState, action) => {
    const newCar = action.car;

    switch (action.type) {
        case actionTypes.ADD_CAR:
            return [
                ...state,
                newCar
            ];
        case actionTypes.EDIT_CAR:
            return state.map(currentCar => {
                if (currentCar.id === newCar.id) {
                    Object.keys(newCar).forEach(property => {
                        if (currentCar[ property ] !== newCar[ property ]) {
                            zipObjects(currentCar, newCar);
                        }
                    });
                }
                return currentCar;
            });
        case actionTypes.DELETE_CAR: {
            const deletedCarId = action.id;
            return state.filter(car => car.id !== deletedCarId);
        }
        default:
            return state;
    }
};

export default carReducer;
