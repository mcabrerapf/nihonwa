const getWordResultFuriArray = (furi) => {
  if (!furi) return [];
  const kan = furi.getElementsByTagName('span');
  return Array.from(kan).map((k) => k.innerText.trim());
};

const getOtherForms = (meanings, tagText) => {
  const forms = meanings.getElementsByTagName('span');
  if (!forms) return null;
  const parsedForms = Array.from(forms).map((form) => form.innerText.trim()).join('');
  return [tagText, parsedForms];
};

const getNotes = (meanings, tagText) => {
  const notes = meanings.getElementsByClassName('meaning-representation_notes')[0];
  if (!notes) return null;
  const noteSpans = notes.getElementsByTagName('span');
  if (!noteSpans) return null;
  const parsedNotes = Array.from(noteSpans).map((note) => note.innerText).join(' ');
  if (!parsedNotes) return null;
  return [tagText, parsedNotes];
};

const getWordMeanings = (meanings) => {
  const mDIvs = meanings.children;
  const meaningPairs = [];
  for (let index = 0; index < mDIvs.length; index += 1) {
    if (!mDIvs[index]) break;
    const currentDivClassame = mDIvs[index].className;

    if (currentDivClassame === 'meaning-tags') {
      meaningPairs.push([mDIvs[index], mDIvs[index + 1]]);
      index += 1;
    }
    if (currentDivClassame === 'meaning-wrapper') {
      meaningPairs.push([null, mDIvs[index]]);
    }
  }
  if (!meaningPairs.length) return [];

  return meaningPairs.map((pair) => {
    const [tag, meaningWrapper] = pair;
    const tagText = tag ? tag.innerText.trim() : null;
    if (tagText === 'Wikipedia definition') return null;
    if (tagText === 'Other forms') return getOtherForms(meaningWrapper, tagText);
    if (tagText === 'Notes') return getNotes(meaningWrapper, tagText);
    const meaningText = meaningWrapper.getElementsByClassName('meaning-meaning')[0].innerText;
    return [tagText, meaningText];
  }).filter(Boolean);
};

const getWordResult = (word, index) => {
  const furi = word.getElementsByClassName('furigana')[0];
  const wordString = word.getElementsByClassName('text')[0].innerText.trim();
  const meaningsWrapper = word.getElementsByClassName('meanings-wrapper')[0];
  const furiArray = getWordResultFuriArray(furi);
  const meanings = getWordMeanings(meaningsWrapper);

  return {
    id: `${wordString}-${index}`,
    furi: furiArray,
    jp: wordString,
    meanings,
  };
};

const parseHtml = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const data = [];
  const primary = doc.getElementById('primary');
  const words = primary.getElementsByClassName('concept_light clearfix');

  Array.from(words).forEach((word, i) => {
    if (!word) return;
    const parsedWord = getWordResult(word, i);
    data.push(parsedWord);
  });

  return data;
};

export default parseHtml;
