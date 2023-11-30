import { CAR_MOVEMENT_SYMBOL } from '../constants/strings.js';

export const printMoveSymbols = (number) => {
  let symbols = '';

  for (let i = 0; i < number; i += 1) {
    symbols += CAR_MOVEMENT_SYMBOL;
  }
  
  return symbols;
};
