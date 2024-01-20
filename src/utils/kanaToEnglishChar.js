import { KANA_EN_MATCHES } from "../constants";


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

export default kanaToEnglishChar;
