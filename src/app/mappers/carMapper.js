import uuidv1 from 'uuid/v1';
import Car from '../models/car';

const mapToCar = data => {
    const {
        id,
        brand,
        model,
        productionYear,
        engineCapacity,
        enginePower,
        price,
        owner
    } = data;

    const car = new Car();
    car.id = id || uuidv1();
    car.brand = brand;
    car.model = model;
    car.productionYear = productionYear;
    car.engineCapacity = engineCapacity;
    car.enginePower = enginePower;
    car.price = price;
    car.owner = owner;

    return car;
};

export default { mapToCar };
