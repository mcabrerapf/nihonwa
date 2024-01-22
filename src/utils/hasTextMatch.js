import getWordPronunciation from "./getWordPronunciation";

const hasTextMatch = (text, item) => {
  if (!text) return true;
  const { jp, jpWords, en, notes, tags, types } = item;
  const parsedJpWords = jpWords ? jpWords.join("") : "";
  const parsedNotes = notes.join("");
  const parsedMeanings = en ? en.join("") : "";
  const parsedTags = tags.join("");
  const parsedTypes = types.join("");
  const parsedPronunciation = getWordPronunciation(item);

  const hasJpMatch = !!jp && jp.indexOf(text.toLowerCase()) !== -1;
  const hasSentenceMatch = parsedJpWords.indexOf(text.toLowerCase()) !== -1;
  const hasMeaningMatch =
    parsedMeanings.toLowerCase().indexOf(text.toLowerCase()) !== -1;
  const hasNotesMatch = parsedNotes.indexOf(text.toLowerCase()) !== -1;
  const hasTypesMatch = parsedTypes.indexOf(text.toLowerCase()) !== -1;
  const hasTagsMatch = parsedTags.indexOf(text.toLowerCase()) !== -1;
  const hasPronunciationMarch =
    parsedPronunciation.indexOf(text.toLowerCase()) !== -1;

  return (
    hasJpMatch ||
    hasSentenceMatch ||
    hasMeaningMatch ||
    hasPronunciationMarch ||
    hasNotesMatch ||
    hasTagsMatch ||
    hasTypesMatch
  );
};

export default hasTextMatch;
