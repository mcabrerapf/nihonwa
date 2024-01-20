import kanaToEnglishChar from "./kanaToEnglishChar";

const getCharWithFuri = (text = "", furi = [], showVocalization = false) => {
  return text.split("").map((char, i) => {
    const furiChar = furi && furi[i];
    const currentKana = furiChar || char;
    const nextKana = furi[i + 1] || text[i + 1];
    const prevKana = furi[i - 1] || text[i - 1];
    const enChar = showVocalization
      ? kanaToEnglishChar(currentKana, nextKana, prevKana)
      : "";
    return [char, furiChar, enChar];
  });
};

export default getCharWithFuri;
