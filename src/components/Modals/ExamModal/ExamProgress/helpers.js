import { generateRandomNumber } from '../../../../utils';

const getKanaSize = (kana) => {
  if (!kana) return 'xl';
  if (kana.length > 10) return 'l';
  if (kana.length > 5) return 'm';
  return 'xl';
};

const getAnswerButtonColor = (answer, isSelectedAnswer, answers) => {
  if (answers.includes(answer)) return 'hit';
  if (isSelectedAnswer && !answers.includes(answer)) return 'miss';
  return '';
};

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
  getAnswerButtonColor,
  getKanaSize,
};
