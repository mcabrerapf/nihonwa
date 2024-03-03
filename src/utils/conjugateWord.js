import { HIRAGANA } from '../constants';

const getTeForm = (stem, ending, conjugation) => {
  switch (conjugation) {
    case '五段':
      if (['う', 'つ', 'る'].includes(ending)) return 'って';
      if (['む', 'ぶ', 'ぬ'].includes(ending)) return 'んで';
      if (stem === '行') return 'って';
      if (ending === 'く') return 'いて';
      if (ending === 'ぐ') return 'いで';
      if (ending === 'す') return 'して';
      return '';

    default:
      return '';
  }
};

const getPastIndicative = (ending) => {
  if (['う', 'つ', 'る'].includes(ending)) return 'った';
  if (['む', 'ぶ', 'ぬ'].includes(ending)) return 'んだ';
  if (ending === 'く') return 'いた';
  if (ending === 'ぐ') return 'いだ';
  if (ending === 'す') return 'した';
  return '';
};

const conjugateGodan = (word) => {
  const stem = word.substring(0, word.length - 1);
  const ending = word.substring(word.length - 1);
  const conjugations = HIRAGANA.flat().find((syllables) => !!syllables.includes(ending));
  if (!conjugations || !conjugations.length) return [];

  const teForm = getTeForm(stem, ending, '五段');
  const pastIndicativeEnding = getPastIndicative(ending);
  //   console.log(stem, ending, conjugations);
  return [
    [
      'Infinitive',
      [`${stem}${conjugations[1]}`],
      [],
    ],
    [
      '-て form',
      [`${stem}${teForm}`],
      [],
    ],
    [
      'Present Indicative',
      [`${stem}${conjugations[2]}`, `${stem}${conjugations[1]}ます`],
      [`${stem}${ending === 'う' ? 'わ' : conjugations[0]}ない`, `${stem}${conjugations[1]}ません`],
    ],
    [
      'Present Progressive',
      [`${stem}${teForm}いる`, `${stem}${teForm}います`],
      ['---', `${stem}${teForm}いません`],
    ],
    [
      'Past Indicative',
      [`${stem}${pastIndicativeEnding}`, `${stem}${conjugations[1]}ました`],
      [`${stem}${ending === 'う' ? 'わ' : conjugations[0]}なかった`, `${stem}${conjugations[1]}ませんでした`],
    ],
    [
      'Past Progressive',
      [`${stem}${teForm}いた`, `${stem}${teForm}いました`],
      ['---', `${stem}${teForm}いませんでした`],
    ],
    [
      'Past Presumtive',
      [`${stem}${pastIndicativeEnding}だろう`, `${stem}${pastIndicativeEnding}でしょう`],
      [`${stem}${ending === 'う' ? 'わ' : conjugations[0]}なかっただろう`, `${stem}${ending === 'う' ? 'わ' : conjugations[0]}なかったでしょう`],
    ],
    [
      'Hipothetical',
      [`${stem}${conjugations[3]}ば`, `${stem}${ending === 'う' ? 'わ' : conjugations[0]}なければ`],
      [],
    ],
    [
      'Conditional',
      [`${stem}${pastIndicativeEnding}ら`, `${stem}${conjugations[1]}ましたら`],
      [`${stem}${ending === 'う' ? 'わ' : conjugations[0]}なかったら`, `${stem}${conjugations[1]}ませんでしたら`],
    ],
    [
      'Potential',
      [`${stem}${conjugations[3]}る`, `${stem}${conjugations[3]}ます`],
      [`${stem}${conjugations[3]}ない`, `${stem}${conjugations[3]}ません`],
    ],
    [
      'Imperative',
      [`${stem}${conjugations[3]}`, `${stem}${teForm}ください`],
      [`${stem}${conjugations[2]}な`, `${stem}${ending === 'う' ? 'わ' : conjugations[0]}ないでください`],
    ],
    [
      'Presumtive/Volitional',
      [`${stem}${conjugations[4]}う`, `${stem}(${conjugations[1]}ま/${conjugations[2]}で)しょう`],
      [`${stem}${ending === 'う' ? 'わ' : conjugations[0]}ないだろう`, `${stem}${ending === 'う' ? 'わ' : conjugations[0]}ないでしょう`],
    ],
    // `${stem}${ending === 'う' ? 'わ' : conjugations[0]}ない`,
    // `${stem}${conjugations[1]}ません`,
    // `${stem}${conjugations[1]}ました`,
    // `${stem}${conjugations[1]}ませんでした`,
    // `${stem}${conjugations[3]}`,
    // `${stem}${conjugations[3]}ば`,
    // `${stem}${conjugations[3]}る`,
    // `${stem}${conjugations[4]}う`,
    // `${stem}${teForm}`,
  ];
};

const conjugateWord = (word, conjugation) => {
  switch (conjugation) {
    case '五段':
      return conjugateGodan(word);

    default:
      return [];
  }
};

export default conjugateWord;
