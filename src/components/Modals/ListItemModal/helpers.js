const checkWordCanProceed = (step, data) => {
  switch (step) {
    case 0:
      return !!data.jp;
    case 2:
      return !!data.en && !!data.en.length && data.en[0].length > 0;
    default:
      return true;
  }
};

const checkEditFooterStatus = (step, data) => {
  const isFirstStep = step === 0;
  const isLastStep = step === 5;
  return [checkWordCanProceed(step, data), isFirstStep, isLastStep];
};

const findSimilarWords = (word, list) => {
  if (!word || !word.jp) return [];
  const { jp } = word;
  return list
    .filter((listWord) => listWord.jp.includes(jp) && listWord.jp !== jp);
};

export { checkEditFooterStatus, findSimilarWords };
