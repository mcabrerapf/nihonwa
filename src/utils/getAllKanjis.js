import checkIfCharIsKanji from './checkIfCharIsKanji';

const getAllKanjis = (words) => {
  const kanjis = [];
  words.forEach((word) => {
    const { jp } = word;
    jp.split('').forEach((char) => {
      if (checkIfCharIsKanji(char)) {
        const addedIndex = kanjis.findIndex((kanji) => kanji?.kanji === char);
        if (addedIndex !== -1) {
          kanjis[addedIndex].words.push(word);
        } else {
          kanjis.push({ kanji: char, words: [word] });
        }
      }
    });
  });
  return kanjis;
};

export default getAllKanjis;
