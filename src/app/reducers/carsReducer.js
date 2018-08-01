import actionTypes from '../constants/actionTypes';

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
            if(currentCar.id === newCar.id) {
                const newCurrentCar = { ...currentCar, ...newCar };
                newState.push(newCurrentCar);
                return newState;
            }
            else {
                newState.push(currentCar);
                return newState;
            }
        }, []);
    case actionTypes.DELETE_CAR: {
        const deleteCarId = action.id;
        return state.filter(car => car.id !== deleteCarId);
    }
    default:
        return state;
    }
};

export default carReducer;