const getWordSentences = (jpWord, sentences) => {
  if (!jpWord) return [];
  return sentences.filter((sentence) => {
    const parsedWords = sentence.jpWords.join("");
    return parsedWords.indexOf(jpWord.toLowerCase()) !== -1;
  });
};

export default getWordSentences;
