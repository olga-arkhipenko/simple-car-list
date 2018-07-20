import actionTypes from '../actions/actionTypes';

const initianState = [
    {
        id: 1,
        brand: 'bmw',
        model: 'x6',
        productionYear: 1998,
        engineCapacity: 10,
        enginePower: 50,
        price: 15000,
        owner: "Ivan Ivanov"
    }
]

const carReducer = (state = initianState, action) => {
    const newCar = action.car;

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
        return state.filter(car => car.id !== newCar.id);
    default:
        return state
    }
}

export default carReducer;