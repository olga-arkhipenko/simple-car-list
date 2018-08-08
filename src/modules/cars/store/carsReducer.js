import { zipObjects } from '../../../common/utilities/zipObjects';
import carMapper from '../mappers/carMapper';

const ADD_CAR = 'simple-cars-list/cars/ADD_CAR';
const EDIT_CAR = 'simple-cars-list/cars/EDIT_CAR';
const DELETE_CAR = 'simple-cars-list/cars/DELETE_CAR';

const carsReducer = (state = [], action) => {
    const newCar = action.car;
    switch (action.type) {
        case ADD_CAR:
            return [
                ...state,
                newCar
            ];
        case EDIT_CAR:
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
        case DELETE_CAR: {
            const deletedCarId = action.id;
            return state.filter(car => car.id !== deletedCarId);
        }
        default:
            return state;
    }
};

const carsActionCreators = {
    addCar: data => {
        const car = carMapper.mapToCar(data);
        return {
            type: ADD_CAR,
            car
        };
    },

    editCar: car => ({
        type: EDIT_CAR,
        car
    }),

    deleteCar: id => ({
        type: DELETE_CAR,
        id
    })
};

export default carsReducer;
export { carsActionCreators };
