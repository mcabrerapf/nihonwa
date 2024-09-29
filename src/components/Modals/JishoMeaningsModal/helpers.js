import {
  GODAN, IADJECTIVE, ICHIDAN, NOUN, VERB,
} from '../../../constants/TAGS';

const getMeanigTags = (meaningTag, tags) => {
  const parsedTag = meaningTag ? meaningTag.toLocaleLowerCase() : '';
  if (parsedTag.includes('noun') && !tags.includes(NOUN)) {
    tags.push(NOUN);
  }
  if (parsedTag.includes('suru') && !tags.includes(VERB)) {
    tags.push(VERB);
  }
  if (parsedTag.includes('godan') && !tags.includes(GODAN)) {
    tags.push(GODAN);
  }
  if (parsedTag.includes('ichidan') && !tags.includes(ICHIDAN)) {
    tags.push(ICHIDAN);
  }
  if (parsedTag.includes('i-') && !tags.includes(IADJECTIVE)) {
    tags.push(IADJECTIVE);
  }
  if (parsedTag.includes('na-') && !tags.includes(IADJECTIVE)) {
    tags.push(IADJECTIVE);
  }
};

const buildWordFromJisho = (jishoWord) => {
  const newWord = {
    jp: jishoWord.jp,
    furi: jishoWord.furi,
    en: [],
    notes: [],
    tags: [],
  };

  jishoWord.meanings.forEach((meaning) => {
    const meaningText = meaning[1].trim();
    getMeanigTags(meaning[0], newWord.tags);
    if (meaning[0] === 'Notes') {
      newWord.notes.push(meaningText);
    } else if (meaning[0] === 'Other forms') {
      newWord.notes.push(`Other forms: ${meaningText}`);
    } else {
      newWord.en.push(meaningText);
    }
  });

  return newWord;
};

export { buildWordFromJisho, getMeanigTags };
