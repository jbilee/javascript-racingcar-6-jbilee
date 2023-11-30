import { Console } from '@woowacourse/mission-utils';
import { PROMPTS } from '../constants/messages.js';

const InputView = {
  async readCarNames() {
    const input = await Console.readLineAsync(PROMPTS.carNames);
    return input;
  },

  async readRoundCount() {
    const input = await Console.readLineAsync(PROMPTS.rounds);
    return input;
  },
};

export default InputView;
