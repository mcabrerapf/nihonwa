import kanaToEnglishChar from "./kanaToEnglishChar";

const getWordPronunciation = ({ jp, jpWords, furi = [] }) => {
  if (!jp && !jpWords) return "";
  const stringToCheck = jp || jpWords.join("");
  
  return stringToCheck
    .split("")
    .map((kana, i) => {
      const currentKana = furi[i] || kana;
      const nextKana = furi[i + 1] || stringToCheck[i + 1];
      const prevKana = furi[i - 1] || stringToCheck[i - 1];
      return kanaToEnglishChar(currentKana, nextKana, prevKana);
    })
    .flat()
    .join("");
};

export default getWordPronunciation;
