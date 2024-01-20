import { SENTENCES } from "../constants";

const getWordSentences = (jpWord) => {
  return SENTENCES.map((sentence) => {
    if (!sentence.jpWords.find((word) => word === jpWord)) return null;
    return sentence;
  }).filter(Boolean);
};

export default getWordSentences;
