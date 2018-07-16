const initialState = {
    item: 'hello'
}

function hui(state = initialState, action) {
    switch (action.type) {
    case 'SIMPLE_ACTION':
        return {
            result: action.payload
        }
    default:
        return state
    }
}

export default hui;