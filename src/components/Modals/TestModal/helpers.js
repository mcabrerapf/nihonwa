import { WORDS } from "../../../constants";
import { generateRandomNumber } from "../../../utils";

const buildQuestions = (limit) => {
    const indexes = [];
    for (let index = 0; index < limit; index += 1) {
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

  export {
    buildQuestions
  }