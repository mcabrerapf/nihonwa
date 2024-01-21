import getWordPronunciation from "./getWordPronunciation";

const hasTextMatch = (text, item) => {
  if (!text) return true;
  const { en, jp, jpWords, notes, tags, types } = item;
  const parsedJpWords = jpWords ? jpWords.join("") : "";
  const parsedNotes = notes.join("");
  const parsedTags = tags.join("");
  const parsedTypes = types.join("");
  const parsedMeanings = en ? en.join("") : "";

  const hasJpMatch = !!jp && jp.indexOf(text.toLowerCase()) !== -1;
  const hasSentenceMatch = parsedJpWords.indexOf(text.toLowerCase()) !== -1;
  const hasMeaningMatch =
    parsedMeanings.toLowerCase().indexOf(text.toLowerCase()) !== -1;
  const hasNotesMatch = parsedNotes.indexOf(text.toLowerCase()) !== -1;
  const hasTypesMatch = parsedTypes.indexOf(text.toLowerCase()) !== -1;
  const hasTagsMatch = parsedTags.indexOf(text.toLowerCase()) !== -1;

  return (
    hasSentenceMatch ||
    hasJpMatch ||
    hasMeaningMatch ||
    hasNotesMatch ||
    hasTagsMatch ||
    hasTypesMatch ||
    getWordPronunciation(item).indexOf(text.toLowerCase()) !== -1
  );
};

export default hasTextMatch;
