import { Random } from '@woowacourse/mission-utils';
import { CAR_MOVEMENT } from '../constants/constants.js';

class Car {
  #name;
  #moves;

  constructor(name) {
    this.#name = name;
    this.#moves = CAR_MOVEMENT.startingMoves;
  }

  makeMove() {
    const randomNumber = Random.pickNumberInRange(
      CAR_MOVEMENT.randomMin,
      CAR_MOVEMENT.randomMax,
    );

    if (randomNumber >= CAR_MOVEMENT.threshold) {
      this.#moves += CAR_MOVEMENT.increment;
    }
  }

  getCarStatus() {
    return { name: this.#name, moves: this.#moves };
  }
}

export default Car;
