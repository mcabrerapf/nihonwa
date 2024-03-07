import { generateRandomNumber } from '../../../utils';

function arraysShareValue(array1, array2) {
  const set1 = new Set(array1);
  if (!array1 || !array1.length) return true;
  return !!array2.find((tag) => set1.has(tag));
}

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function getPossibleAnswers(answers, wordsList, limit = 3) {
  const possiblAnswers = [shuffleArray(answers)[0]];

  while (possiblAnswers.length < limit) {
    const rIndex = generateRandomNumber(0, wordsList.length);
    const randomAnswerOption = shuffleArray(wordsList[rIndex].en)[0];
    if (
      !answers.includes(randomAnswerOption) && !possiblAnswers.includes(randomAnswerOption)
    ) possiblAnswers.push(randomAnswerOption);
  }

  return shuffleArray(possiblAnswers);
}

const buildQuestions = (testSetupOptions, optionsList) => {
  const { questionLimit, questionTags } = testSetupOptions;
  const shuffledOptions = shuffleArray(optionsList);
  const filteredOptions = shuffledOptions
    .slice().sort((a, b) => {
      const valueA = a.hits + a.misses;
      const valueB = b.hits + b.misses;
      if (valueA > valueB) return 1;
      return -1;
    })
    .filter(({ tags }) => arraysShareValue(questionTags, tags));
  // const sortedOptions = sortBy(filteredOptions, '%', 'desc');

  const limitToUse = questionLimit > filteredOptions.length
    ? filteredOptions.length : questionLimit;

  const indexes = [];
  for (let index = 0; index < limitToUse; index += 1) {
    const rIndex = generateRandomNumber(0, limitToUse, indexes);
    indexes.push(rIndex);
  }

  return indexes.map((index) => ({
    ...filteredOptions[index],
    answers: getPossibleAnswers(filteredOptions[index].en, optionsList),
    correct: false,
  }));
};

export { buildQuestions };
