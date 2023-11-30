import Car from '../domains/Car.js';
import InputView from '../view/InputView.js';
import Validate from '../utils/Validate.js';

class RaceHandler {
  #cars;

  constructor() {
    this.getRaceInfo();
  }

  async getRaceInfo() {
    const carNames = await this.getCarNames();
    const roundCount = await this.getRoundCount();

    this.#cars = [];
    const newCar = new Car();
    this.#cars.push(newCar);
  }

  async getCarNames() {
    const carNames = await InputView.readCarNames();

    Validate.carNames(carNames);

    return carNames;
  }

  async getRoundCount() {
    const roundCount = await InputView.readRoundCount();

    Validate.rounds(roundCount);

    return roundCount;
  }
}

export default RaceHandler;
