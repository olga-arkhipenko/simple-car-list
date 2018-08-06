import actionTypes from '../constants/actionTypes';
import carMapper from '../mappers/carMapper';

const carReducer = (state = [], action) => {
    const newCar = action.car;

    switch (action.type) {
        case actionTypes.ADD_CAR:
            return [
                ...state,
                newCar
            ];
        case actionTypes.EDIT_CAR:
            return state.reduce((newState, currentCar) => {
                if (currentCar.id === newCar.id) {
                    const newCurrentCar = carMapper.mapToCar({ ...currentCar, ...newCar });
                    newState.push(newCurrentCar);
                    return newState;
                }
                newState.push(currentCar);
                return newState;
            }, []);
        case actionTypes.DELETE_CAR: {
            const deletedCarId = action.id;
            return state.filter(car => car.id !== deletedCarId);
        }
        default:
            return state;
    }
};

export default carReducer;
