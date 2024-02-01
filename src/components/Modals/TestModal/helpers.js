import { generateRandomNumber } from '../../../utils';

const buildQuestions = (testSetupOptions, optionsList) => {
  const { questionLimit, questionTags } = testSetupOptions;

  const filteredOptions = optionsList.filter(({ tags }) => {
    let hasTagMatch = false;
    tags.forEach((tag) => {
      hasTagMatch = !!questionTags.includes(tag);
    });
    return hasTagMatch;
  });
  const limitToUse = questionLimit > filteredOptions.length
    ? filteredOptions.length : questionLimit;

  const indexes = [];
  for (let index = 0; index < limitToUse; index += 1) {
    const rIndex = generateRandomNumber(0, filteredOptions.length, indexes);
    indexes.push(rIndex);
  }
  return indexes.map((index) => ({
    ...filteredOptions[index],
    hits: 0,
    misses: 0,
    correct: false,
  }));
};

export { buildQuestions };
