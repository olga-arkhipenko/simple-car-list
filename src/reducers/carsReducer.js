const initialState = [];

const carReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_CAR':
        return [
            ...state,
            action.payload
        ]
    default:
        return state
    }
}

export default carReducer;