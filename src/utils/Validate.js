import { REGEX } from '../constants/constants.js';

const Validate = {
  carNames(input) {
    const names = input.split(',');
    names.forEach((name) => {
      if (!REGEX.name.test(name)) {
        throw new Error('[ERROR]');
      }
    });

    return names;
  },

  rounds(input) {
    if (!REGEX.round.test(input)) {
      throw new Error('[ERROR]');
    }

    return Number(input);
  },
};

export default Validate;
