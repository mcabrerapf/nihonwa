const getWordSentences = (jpWord, sentences) => {
  if (!jpWord) return [];
  return sentences.filter((sentence) => {
    if (!sentence.jp) return false;
    return sentence.jp.indexOf(jpWord.toLowerCase()) !== -1;
  });
};

export default getWordSentences;
