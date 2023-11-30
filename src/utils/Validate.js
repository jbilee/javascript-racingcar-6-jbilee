import { REGEX } from '../constants/constants.js';
import { CAR_NAME_SEPARATOR } from '../constants/strings.js';
import { ERRORS } from '../constants/messages.js';

const Validate = {
  carNames(input) {
    const names = input.split(CAR_NAME_SEPARATOR);

    names.forEach((name) => {
      if (!REGEX.name.test(name)) {
        throw new Error(ERRORS.invalidName);
      }
    });

    return names;
  },

  rounds(input) {
    if (!REGEX.round.test(input)) {
      throw new Error(ERRORS.invalidRoundNumber);
    }

    return Number(input);
  },
};

export default Validate;
