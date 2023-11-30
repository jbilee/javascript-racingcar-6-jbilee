import { Console, Random } from '@woowacourse/mission-utils';
import RaceHandler from '../src/controller/RaceHandler.js';
import { ERRORS } from '../src/constants/messages.js';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();
  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('이름 입력값 검증 기능 테스트', () => {
  test('이름이 5자를 초과할 경우 예외 발생', async () => {
    const INPUT = ['foobar,baz'];

    mockQuestions(INPUT);

    const handler = new RaceHandler();

    await expect(handler.getCarNames()).rejects.toThrow(ERRORS.invalidName);
  });

  test('중복되는 이름이 있을 경우 예외 발생', async () => {
    const INPUT = ['foo,bar,bar'];

    mockQuestions(INPUT);

    const handler = new RaceHandler();

    await expect(handler.getCarNames()).rejects.toThrow(ERRORS.duplicateName);
  });

  test.each([[['a'], ['a,b,c,d,e,f,g,h,i,j,k']]])(
    '이름이 1개 미만이거나 10개를 초과할 경우 예외 발생',
    async (input) => {
      mockQuestions(input);

      const handler = new RaceHandler();

      await expect(handler.getCarNames()).rejects.toThrow(ERRORS.invalidNameCount);
    },
  );
});

describe('라운드 횟수 입력값 검증 기능 테스트', () => {
  test.each([[['abc'], ['@#^'], ['1,234'], ['12.3']]])('숫자나 정수 형식이 아닐 경우 예외 발생', async (input) => {
    mockQuestions(input);

    const handler = new RaceHandler();

    await expect(handler.getRoundCount()).rejects.toThrow(ERRORS.invalidRoundFormat);
  });

  test.each([[['0'], ['1001']]])('라운드가 1회 미만이거나 1000회를 초과할 경우 예외 발생', async (input) => {
    mockQuestions(input);

    const handler = new RaceHandler();

    await expect(handler.getRoundCount()).rejects.toThrow(ERRORS.invalidRoundCount);
  });
});

describe('우승자 출력 메소드 테스트', () => {
  test('단일 우승자 출력 테스트', async () => {
    const INPUTS = ['foo,bar,baz', '2'];
    const RANDOM_NUMBERS = [3, 3, 5, 3, 5, 5];
    const OUTPUT = '최종 우승자 : baz';
    const logSpy = getLogSpy();

    mockQuestions(INPUTS);
    mockRandoms(RANDOM_NUMBERS);

    const handler = new RaceHandler();
    await handler.setNewGame();
    handler.playRounds();

    expect(logSpy).toHaveBeenCalledWith(OUTPUT);
  });

  test('공동 우승자 출력 테스트', async () => {
    const INPUTS = ['foo,bar,baz', '2'];
    const RANDOM_NUMBERS = [8, 3, 5, 9, 5, 5];
    const OUTPUT = '최종 우승자 : foo, baz';
    const logSpy = getLogSpy();

    mockQuestions(INPUTS);
    mockRandoms(RANDOM_NUMBERS);

    const handler = new RaceHandler();
    await handler.setNewGame();
    handler.playRounds();

    expect(logSpy).toHaveBeenCalledWith(OUTPUT);
  });
});
