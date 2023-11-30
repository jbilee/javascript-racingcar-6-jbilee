import { REGEX } from '../constants/constants.js';

const Validate = {
  carNames(input) {
    const names = input.split(',');
    names.forEach((name) => {
      if (!REGEX.name.test(name)) {
        throw new Error('[ERROR]');
      }
    });
  },
};

export default Validate;
