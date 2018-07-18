const initialState = [];

const carReducer = function (state = initialState, action) {
    switch (action.type) {
    case 'SIMPLE_ACTION':
        return {
            result: action.payload
        }
    default:
        return state
    }
}

export default carReducer;