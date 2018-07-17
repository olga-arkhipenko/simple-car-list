const initialState = [
    {
        id: 1,
        brand: 'BMW',
        model: 'x6',
        productionYear: '2013',
        engineCapacity: '9',
        enginePower: '1200',
        price: '13 000',
        owner: 'Vasiliy Pupkin'
    },
    {
        id: 2,
        brand: 'BMW',
        model: 'x5',
        productionYear: '2010',
        engineCapacity: '10',
        enginePower: '1200',
        price: '10 000',
        owner: 'Vasilisa Pupkina'
    }
]

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