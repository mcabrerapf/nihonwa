const getWordResultFuriArray = (furi) => {
  if (!furi) return [];
  const kan = furi.getElementsByTagName('span');
  return Array.from(kan).map((k) => k.innerText.trim());
};

const getOtherForms = (meanings, tagText) => {
  if (meanings && tagText) return null;
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
  const tags = meanings.getElementsByClassName('meaning-tags');
  const meaningMeanings = meanings.getElementsByClassName('meaning-meaning');
  if (!tags && !meaningMeanings) return [];
  // TODO fix issue with tags and meanings not matching check classnames used
  return Array.from(tags).map((tag, i) => {
    if (!tag) return null;
    const tagText = tag.innerText.trim();
    if (tagText === 'Wikipedia definition') return null;
    if (tagText === 'Other forms') return getOtherForms(meaningMeanings[i], tagText);
    if (tagText === 'Notes') return getNotes(meanings, tagText);
    const meaningText = meaningMeanings[i].innerText.trim();
    return [tagText, meaningText];
  }).filter(Boolean);
};
const getWordResult = (word) => {
  const furi = word.getElementsByClassName('furigana')[0];
  const wordString = word.getElementsByClassName('text')[0].innerText.trim();
  const meaningsWrapper = word.getElementsByClassName('meanings-wrapper')[0];
  const furiArray = getWordResultFuriArray(furi);
  const meanings = getWordMeanings(meaningsWrapper);

  // console.log('-- FURI --', furiArray);
  // console.log('-- STRING --', wordString);
  // console.log('-- MEANINGS --');
  // meanings.forEach((mean) => console.log(mean.join(' - ')));
  return {
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

  Array.from(words).forEach((word) => {
    if (!word) return;
    // console.log('----- WORD -----');
    //   console.log(word);
    const parsedWord = getWordResult(word);
    data.push(parsedWord);
  });
  console.log(data);
  return data;
};

export default parseHtml;
