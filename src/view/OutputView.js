import { Console } from '@woowacourse/mission-utils';
import { RESULTS, WINNER, WINNER_SEPARATOR } from '../constants/strings.js';
import { printMoveSymbols } from '../utils/utilities.js';

const OutputView = {
  printResultsTitle() {
    Console.print(RESULTS.title);
  },

  printRoundResults(cars) {
    cars.forEach(({ name, moves }) => {
      const movesString = printMoveSymbols(moves);
      Console.print(name + RESULTS.separator + movesString);
    });

    Console.print('');
  },

  printWinners(winners) {
    const string = winners.join(WINNER_SEPARATOR);
    Console.print(WINNER + string);
  },
};

export default OutputView;
