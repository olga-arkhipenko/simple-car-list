import actionTypes from '../actions/actionTypes';

const carReducer = (state = [], action) => {
    const newCar = action.car;
    const deleteId = action.id;

    switch (action.type) {
    case actionTypes.ADD_CAR: 
        return [
            ...state,
            newCar
        ];
    case actionTypes.EDIT_CAR: {
        const carIndex = state.findIndex(car => car.id === newCar.id);
        if (carIndex >= 0) {
            return state.reduce((newState, currentCar) => {
                if(currentCar.id === newCar.id) {
                    const newCurrentCar = {...currentCar, ...newCar};
                    newState.push(newCurrentCar);
                    return newState;
                }
                else {
                    newState.push(currentCar);
                    return newState;
                }
            }, []);
        }
    }
        break
    case actionTypes.DELETE_CAR:
        return state.filter(car => car.id !== deleteId);
    default:
        return state
    }
}

export default carReducer;