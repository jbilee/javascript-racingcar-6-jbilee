import { Console } from '@woowacourse/mission-utils';
import { RESULTS, WINNER } from '../constants/strings.js';

const OutputView = {
  printResultsTitle() {
    Console.print(RESULTS.title);
  },

  printRoundResults(cars) {
    cars.forEach(({ name, moves }) => {
      Console.print(name + RESULTS.separator + moves);
    });

    Console.print('');
  },
};

export default OutputView;
