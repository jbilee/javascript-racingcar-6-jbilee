import {Random} from '@woowacourse/mission-utils'
import Car from "../src/domains/Car.js";

const mockRandom = (value) => {
  Random.pickNumberInRange = jest.fn();
  Random.pickNumberInRange.mockReturnValue(value);
};

describe('Car 클래스 메소드 테스트', () => {
  test('랜덤값이 4 미만이면 전진하지 않는다', () => {
    const RANDOM_VALUE = 3;

    mockRandom(RANDOM_VALUE);
    const car = new Car();

    car.makeMove();
    const carData = car.getCarStatus();

    expect(carData.moves).toBe(0);
  });

  test('랜덤값이 4 이상이면 전진한다', () => {
    const RANDOM_VALUE = 4;

    mockRandom(RANDOM_VALUE);
    const car = new Car();

    car.makeMove();
    const carData = car.getCarStatus();

    expect(carData.moves).toBe(1);
  });
});