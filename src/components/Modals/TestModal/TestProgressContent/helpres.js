import { generateRandomNumber } from '../../../../utils';

const checkIfShouldShow = (questionLanguage, questionKey, showAnswer, isOtherTrue) => {
  if (showAnswer) return true;
  if (isOtherTrue !== undefined) return !isOtherTrue;
  if (questionLanguage.includes(questionKey)) {
    if (questionLanguage.length === 1) return true;
    return generateRandomNumber(0, 100) < 50;
  }
  return false;
};

export {
  checkIfShouldShow,
};
