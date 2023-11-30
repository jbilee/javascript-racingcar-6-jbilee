import Car from '../domains/Car.js';
import InputView from '../view/InputView.js';
import Validate from '../utils/Validate.js';

class RaceHandler {
  #cars;

  constructor() {
    this.#cars = [];
    this.getRaceInfo();
  }

  async getRaceInfo() {
    const carNames = await this.getCarNames();
    const roundCount = await this.getRoundCount();

    carNames.forEach((name) => {
      const newCar = new Car(name);
      this.#cars.push(newCar);
    });

    
  }

  async getCarNames() {
    const carNames = await InputView.readCarNames();
    const validatedNames = Validate.carNames(carNames);

    return validatedNames;
  }

  async getRoundCount() {
    const roundCount = await InputView.readRoundCount();
    const validatedCount = Validate.rounds(roundCount);

    return validatedCount;
  }
}

export default RaceHandler;
