import containsKanji from './containsKanji';
import containsKatakana from './containsKatakana';

const updateWordTags = (word = '', selectedTags = []) => {
  const hasKanji = containsKanji(word);
  const hasKataKana = containsKatakana(word);
  const isKanjiSelected = selectedTags.includes('kanji');
  const isKatakanaSelected = selectedTags.includes('katakana');
  const updatedTags = [...selectedTags];
  if (!updatedTags.length) updatedTags.push('other');
  if (!isKanjiSelected && hasKanji) updatedTags.push('kanji');
  if (!isKatakanaSelected && hasKataKana) updatedTags.push('katakana');

  return updatedTags;
};

export default updateWordTags;
