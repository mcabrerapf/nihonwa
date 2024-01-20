import getWordPronunciation from "./getWordPronunciation";

const hasTextMatch = (text, item) => {
  if (!text) return true;
  const { en } = item;
  const hasMeaningMatch = Array.isArray(en)
    ? !!en.find(
        (meaning) => meaning.toLowerCase().indexOf(text.toLowerCase()) !== -1
      )
    : en.toLowerCase().indexOf(text.toLowerCase()) !== -1;
  return (
    hasMeaningMatch ||
    getWordPronunciation(item).indexOf(text.toLowerCase()) !== -1
  );
};

export default hasTextMatch;
