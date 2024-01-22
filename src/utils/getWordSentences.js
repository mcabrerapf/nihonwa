const getWordSentences = (jpWord, sentences) => {  
  return sentences
    .filter((sentence) => {
      const parsedWords = sentence.jpWords.join("");
      return parsedWords.indexOf(jpWord.toLowerCase()) !== -1
      
    })
};

export default getWordSentences;
