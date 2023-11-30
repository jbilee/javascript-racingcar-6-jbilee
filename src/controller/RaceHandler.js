import Car from '../domains/Car.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Validate from '../utils/Validate.js';

class RaceHandler {
  #cars;
  #rounds;

  constructor() {
    this.#cars = [];
  }

  async setNewGame() {
    const carNames = await this.getCarNames();
    carNames.forEach((name) => {
      const newCar = new Car(name);
      this.#cars.push(newCar);
    });

    this.#rounds = await this.getRoundCount();
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
    OutputView.printResultsTitle();

    for (let i = 0; i < this.#rounds; i += 1) {
      this.#cars.forEach((car) => {
        car.makeMove();
      });

      this.getResults();
    }

    return this.getWinners();
  }

  getResults() {
    const carsData = this.#cars.map((car) => car.getCarStatus());
    OutputView.printRoundResults(carsData);
  }

  getWinners() {
    const carsData = this.#cars.map((car) => car.getCarStatus());
    const highestMove = Math.max(...carsData.map((car) => car.moves));

    const winners = carsData
      .filter((car) => car.moves === highestMove)
      .map((car) => car.name);

    OutputView.printWinners(winners);
  }
}

export default RaceHandler;
