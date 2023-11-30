import { Console } from '@woowacourse/mission-utils';
import { PROMPTS } from '../constants/messages.js';

const InputView = {
  async readCarNames() {
    const input = await Console.readLineAsync(PROMPTS.carNames);
    return input;
  },
};

export default InputView;
