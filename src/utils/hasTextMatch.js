// import getWordPronunciation from './getWordPronunciation';

const hasTextMatch = (text, item) => {
  if (!text) return true;
  const {
    jp, en, furi, notes,
  } = item;

  const parsedNotes = notes.join('');
  const parsedMeanings = en ? en.join('') : '';
  const parsedFuri = furi ? furi.join('') : '';
  // const parsedTags = tags.join('');
  // const parsedPronunciation = getWordPronunciation(item);

  const hasJpMatch = !!jp && jp.indexOf(text.toLowerCase()) !== -1;
  const hasFuriMatch = !!parsedFuri && parsedFuri.indexOf(text.toLowerCase()) !== -1;
  const hasMeaningMatch = parsedMeanings.toLowerCase().indexOf(text.toLowerCase()) !== -1;
  const hasNotesMatch = parsedNotes.indexOf(text.toLowerCase()) !== -1;
  // const hasTagsMatch = parsedTags.indexOf(text.toLowerCase()) !== -1;
  // const hasPronunciationMarch = parsedPronunciation.indexOf(text.toLowerCase()) !== -1;
  // TODO improve this
  return (
    hasJpMatch
    || hasFuriMatch
    || hasMeaningMatch
    || hasNotesMatch
  );
};

export default hasTextMatch;
