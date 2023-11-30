import Car from '../domains/Car.js'

class RaceHandler {
  #cars;

  constructor() {
    this.getRaceInfo();
  }

  getRaceInfo() {
    this.#cars = [];
    const newCar = new Car();
    this.#cars.push(newCar);
  }
}

export default RaceHandler;
