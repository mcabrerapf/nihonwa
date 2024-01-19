import { KANA_EN_MATCHES } from "../constants/KANAS";

const generateRandomNumber = (min = 0, max = 100, excludes = []) => {
  if (min === max) return min;
  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand += min;
  if (excludes.find((exclude) => exclude === rand))
    return generateRandomNumber(min, max, excludes);
  return rand;
};

const kanaToEnglishChar = (kana, next, prev) => {
  if (!kana) return "";
  if (kana.length > 1) {
    return kana
      .split("")
      .map((singleKana) => KANA_EN_MATCHES[singleKana])
      .join("");
  }
  if (kana === "ー") {
    const enMatch = KANA_EN_MATCHES[prev] || "";
    return enMatch[enMatch.length - 1] || "";
  }
  if ((kana === "ッ" || kana === "っ") && !!next) {
    return KANA_EN_MATCHES[next][0] || "";
  }
  return KANA_EN_MATCHES[`${kana}${next}`] || KANA_EN_MATCHES[kana] || "";
};

const getWordPronunciation = ({ kanji, kana, furi = [] }) => {
  const stringToParse = kanji || kana;
  if (!stringToParse) return "";

  return stringToParse
    .split("")
    .map((kana, i) => {
      const currentKana = furi[i] || kana;
      const nextKana = furi[i + 1] || stringToParse[i + 1];
      const prevKana = furi[i - 1] || stringToParse[i - 1];
      return kanaToEnglishChar(currentKana, nextKana, prevKana);
    })
    .flat()
    .join("");
};

export { generateRandomNumber, kanaToEnglishChar, getWordPronunciation };
