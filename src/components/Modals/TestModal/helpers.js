import { WORDS } from "../../../constants";
import { generateRandomNumber } from "../../../utils";

const buildQuestions = (testSetupOptions) => {
  const { questionLimit } = testSetupOptions;
  const indexes = [];
  for (let index = 0; index < questionLimit; index += 1) {
    const rIndex = generateRandomNumber(0, WORDS.length, indexes);
    indexes.push(rIndex);
  }
  return indexes.map((index) => {
    return {
      ...WORDS[index],
      hits: 0,
      misses: 0,
      correct: false,
    };
  });
};

export { buildQuestions };
