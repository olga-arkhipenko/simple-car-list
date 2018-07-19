import actionTypes from '../actions/actionTypes';

const carReducer = (state = [], action) => {
    switch (action.type) {
    case actionTypes.ADD_CAR:
        return [
            ...state,
            action.car
        ]
    default:
        return state
    }
}

export default carReducer;