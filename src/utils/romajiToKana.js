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
  const kanaToUse = kana === "hi" ? EN_HIRAGANA_MATCHES : EN_KATAKANA_MATCHES;
  let wordToParse = romaji
    .split("")
    .map((char, i) => {
      const lowerCaseChar = char.toLocaleLowerCase();
      if (lowerCaseChar === "-") return "ー";
      if (
        !!supportedConsonants.find((consonant) => consonant === lowerCaseChar)
      ) {
        const nextChar = romaji[i + 1]
          ? romaji[i + 1].toLocaleLowerCase()
          : null;

        if (nextChar === lowerCaseChar) return kana === "hi" ? "っ" : "ッ";
      }
      return char;
    })
    .join("");

  let finalWord = wordToParse;
  let parsedToIndex = 0;

  wordToParse.split("").forEach((char, i) => {
    const lowerCaseChar = char.toLocaleLowerCase();

    if (i !== 0 && i <= parsedToIndex) return;
    const nextChar = wordToParse[i + 1]
      ? wordToParse[i + 1].toLocaleLowerCase()
      : "";
    const nextNextChar = wordToParse[i + 2]
      ? wordToParse[i + 2].toLocaleLowerCase()
      : "";
    const nextNextString = `${lowerCaseChar}${nextChar}${nextNextChar}`;
    const nextString = `${lowerCaseChar}${nextChar}`;

    if (!!nextNextChar && kanaToUse[nextNextString]) {
      finalWord = finalWord.replace(`${char}${wordToParse[i + 1]}${wordToParse[i + 2]}`, kanaToUse[nextNextString]);
      parsedToIndex = i + 2;
      return;
    }
    if (!!nextChar && kanaToUse[nextString]) {
      finalWord = finalWord.replace(`${char}${wordToParse[i + 1]}`, kanaToUse[nextString]);
      parsedToIndex = i + 1;
      return;
    }
    if (kanaToUse[lowerCaseChar]) {

      finalWord = finalWord.replace(char, kanaToUse[lowerCaseChar]);
      parsedToIndex = i;
      return;
    }
  });

  return finalWord;
};

export default romajiToKana;
