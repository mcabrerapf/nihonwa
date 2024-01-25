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

const checkSentenceCanProceed = (step, data) => {
  switch (step) {
    case 0:
      return !!data.jp && !!data.jp.length;
    case 1:
      return !!data.en && !!data.en.length && !!data.en[0];
    default:
      return true;
  }
};

const checkEditFooterStatus = (step, type, data) => {
  if (type === 'word') {
    const isFirstStep = step === 0;
    const isLastStep = step === 5;
    return [checkWordCanProceed(step, data), isFirstStep, isLastStep];
  }
  if (type === 'sentence') {
    const isFirstStep = step === 0;
    const isLastStep = step === 4;
    return [checkSentenceCanProceed(step, data), isFirstStep, isLastStep];
  }
  return [false, false, false];
};

const getEditStepsArray = (type) => {
  if (type === 'word') return [0, 1, 2, 3, 4, 5];
  return [0, 1, 2, 3, 4];
};

export { checkEditFooterStatus, getEditStepsArray };
