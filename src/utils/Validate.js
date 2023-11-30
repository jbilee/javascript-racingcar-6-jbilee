import { CAP, REGEX } from '../constants/constants.js';
import { CAR_NAME_SEPARATOR } from '../constants/strings.js';
import { ERRORS } from '../constants/messages.js';

const Validate = {
  nameFormat(input) {
    const names = input.split(CAR_NAME_SEPARATOR);
    const nameSet = new Set(names);

    if (names.length !== nameSet.size) {
      throw new Error(ERRORS.duplicateName);
    }
    if (names.length < CAP.carsMin || names.length > CAP.carsMax) {
      throw new Error(ERRORS.invalidNameCount);
    }
  },

  carName(input) {
    const names = input.split(CAR_NAME_SEPARATOR);

    names.forEach((name) => {
      if (!REGEX.nameChars.test(name)) {
        throw new Error(ERRORS.invalidName);
      }
    });

    return names;
  },

  round(input) {
    if (!REGEX.roundChars.test(input)) {
      throw new Error(ERRORS.invalidRoundNumber);
    }
    if (Number(input) < CAP.roundsMin || Number(input) > CAP.roundsMax) {
      throw new Error(ERRORS.invalidRoundCount);
    }

    return Number(input);
  },
};

export default Validate;
