import { Random } from '@woowacourse/mission-utils';
import { CAR_MOVEMENT } from '../constants/constants.js';

class Car {
  #name;
  #moves;

  constructor(name) {
    this.#name = name;
    this.#moves = 0;
  }

  makeMove() {
    const randomNumber = Random.pickNumberInRange(
      CAR_MOVEMENT.randomMin,
      CAR_MOVEMENT.randomMax,
    );

    if (randomNumber > CAR_MOVEMENT.threshold) {
      this.#moves += CAR_MOVEMENT.increment;
    }
  }

  getCarStatus() {
    let movesString = '';

    for (let i = 0; i < this.#moves; i += 1) {
      movesString += CAR_MOVEMENT.moveSymbol;
    }

    return { name: this.#name, moves: movesString };
  }
}

export default Car;
