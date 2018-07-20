import Car from '../models/Car';
import uuidv1 from 'uuid/v1';

const mapToCar = (data) => {
    const car = new Car();
    car.id = data.id || uuidv1();
    car.brand = data.brand;
    car.model = data.model;
    car.productionYear = data.productionYear;
    car.engineCapacity = data.engineCapacity;
    car.enginePower = data.enginePower;
    car.price = data.price;
    car.owner = data.owner;

    return car;
};

export default { mapToCar };