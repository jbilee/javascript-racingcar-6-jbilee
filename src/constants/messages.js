export const PROMPTS = {
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  rounds: '시도할 횟수는 몇 회인가요?\n',
};

export const ERRORS = {
  invalidName: '[ERROR] 이름이 잘못된 형식입니다.',
  invalidNameCount: '[ERROR] 이름은 2개 이상, 10개 이하여야 합니다.',
  duplicateName: '[ERROR] 중복되는 이름이 있습니다.',
  invalidRoundFormat: '[ERROR] 숫자가 잘못된 형식입니다.',
  invalidRoundCount: '[ERROR] 횟수는 1번 이상, 1000번 이하여야 합니다.',
};
