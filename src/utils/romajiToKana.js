import { EN_HIRAGANA_MATCHES, EN_KATAKANA_MATCHES } from "../constants";
const supportedConsonants = [
  "k",
  "s",
  "t",
  "n",
  "w",
  "f",
  "m",
  "y",
  "r",
  "w",
  "g",
  "z",
  "d",
  "b",
  "p",
];

const romajiToKana = (romaji, kana) => {
  if (!romaji) return "";
  const kanaToUse = kana === 'hi' ? EN_HIRAGANA_MATCHES : EN_KATAKANA_MATCHES;
  let wordToParse = romaji.toLocaleLowerCase();
  Object.keys(kanaToUse).forEach((romajiChar) => {
    if (wordToParse.indexOf(romajiChar) !== -1) {
      wordToParse = wordToParse.replaceAll(
        romajiChar,
        kanaToUse[romajiChar]
      );
    }
  });

  return wordToParse
    .split("")
    .map((char) => {
      if (char === "-") return "ー";
      if (!!supportedConsonants.find((consonant) => consonant === char))
        return kana === 'hi' ? "っ" : 'ッ';
      return char;
    })
    .join("");
};

export default romajiToKana;
