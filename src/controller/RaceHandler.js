import Car from '../domains/Car.js';
import InputView from '../view/InputView.js';
import Validate from '../utils/Validate.js';

class RaceHandler {
  #cars;
  #rounds;

  constructor() {
    this.#cars = [];
    this.getRaceInfo();
  }

  async getRaceInfo() {
    const carNames = await this.getCarNames();
    carNames.forEach((name) => {
      const newCar = new Car(name);
      this.#cars.push(newCar);
    });

    this.#rounds = await this.getRoundCount();

    return this.playRounds();
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

  playRounds() {
    for (let i = 0; i < this.#rounds; i += 1) {
      this.#cars.forEach((car) => {
        car.makeMove();
      });
    }
  }
}

export default RaceHandler;
