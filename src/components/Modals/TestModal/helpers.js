import { generateRandomNumber } from "../../../utils";

const buildQuestions = (testSetupOptions, optionsList) => {
  const { questionLimit } = testSetupOptions;
  const indexes = [];
  for (let index = 0; index < questionLimit; index += 1) {
    const rIndex = generateRandomNumber(0, optionsList.length, indexes);
    indexes.push(rIndex);
  }
  return indexes.map((index) => {
    return {
      ...optionsList[index],
      hits: 0,
      misses: 0,
      correct: false,
    };
  });
};

export { buildQuestions };
