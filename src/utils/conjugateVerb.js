import { HIRAGANA, VERB_TENSES } from '../constants';

const getTeForm = (stem, ending, type) => {
  switch (type) {
    case '五段':
      if (['う', 'つ', 'る'].includes(ending)) return 'って';
      if (['む', 'ぶ', 'ぬ'].includes(ending)) return 'んで';
      if (stem === '行') return 'って';
      if (ending === 'く') return 'いて';
      if (ending === 'ぐ') return 'いで';
      if (ending === 'す') return 'して';
      return 'て';

    default:
      return 'て';
  }
};

const getPastIndicative = (ending) => {
  if (['う', 'つ', 'る'].includes(ending)) return 'った';
  if (['む', 'ぶ', 'ぬ'].includes(ending)) return 'んだ';
  if (ending === 'く') return 'いた';
  if (ending === 'ぐ') return 'いだ';
  if (ending === 'す') return 'した';
  return 'た';
};

const conjugateGodan = ({
  verb = '', tense = '', type = '五段', polite = false, negative = false,
}) => {
  const stem = verb.substring(0, verb.length - 1);
  const isGodan = type === '五段';
  const ending = isGodan ? verb.substring(verb.length - 1) : '';
  const conjugations = HIRAGANA.flat().find((syllables) => !!syllables.includes(ending)) || ['', '', '', '', ''];
  const teForm = getTeForm(stem, ending, type);
  const pastIndicativeEnding = getPastIndicative(ending);
  const aConjugation = ending === 'う' ? 'わ' : conjugations[0];

  switch (tense) {
    case 'infinitive':
      if (polite && negative) return '';
      if (negative) return '';
      if (polite) return '';
      return `${stem}${conjugations[1]}`;
    case 'te':
      if (polite && negative) return '';
      if (negative) return '';
      if (polite) return '';
      return `${stem}${teForm}`;
    case 'hipothetical':
      if (polite && negative) return '';
      if (negative) return '';
      if (polite) return `${stem}${aConjugation}なければ`;
      return `${stem}${conjugations[3]}${!isGodan ? 'れ' : ''}ば`;
    case 'present-indicative':
      if (polite && negative) return `${stem}${conjugations[1]}ません`;
      if (negative) return `${stem}${aConjugation}ない`;
      if (polite) return `${stem}${conjugations[1]}ます`;
      return `${stem}${conjugations[2]}${!isGodan ? 'る' : ''}`;
    case 'present-progressive':
      if (polite && negative) return `${stem}${teForm}いません`;
      if (negative) return '---';
      if (polite) return `${stem}${teForm}います`;
      return `${stem}${teForm}いる`;
    case 'past-indicative':
      if (polite && negative) return `${stem}${conjugations[1]}ませんでした`;
      if (negative) return `${stem}${aConjugation}なかった`;
      if (polite) return `${stem}${conjugations[1]}ました`;
      return `${stem}${pastIndicativeEnding}`;
    case 'past-progressive':
      if (polite && negative) return `${stem}${teForm}いませんでした`;
      if (negative) return '---';
      if (polite) return `${stem}${teForm}いました`;
      return `${stem}${teForm}いた`;
    case 'past-presumtive':
      if (polite && negative) return `${stem}${aConjugation}なかったでしょう`;
      if (negative) return `${stem}${aConjugation}なかっただろう`;
      if (polite) return `${stem}${pastIndicativeEnding}でしょう`;
      return `${stem}${pastIndicativeEnding}だろう`;
    case 'conditional':
      if (polite && negative) return `${stem}${conjugations[1]}ませんでしたら`;
      if (negative) return `${stem}${aConjugation}なかったら`;
      if (polite) return `${stem}${conjugations[1]}ましたら`;
      return `${stem}${pastIndicativeEnding}ら`;
    case 'potential':
      if (polite && negative) return `${stem}${conjugations[3]}${!isGodan ? 'られ' : ''}ません`;
      if (negative) return `${stem}${conjugations[3]}${!isGodan ? 'られ' : ''}ない`;
      if (polite) return `${stem}${conjugations[3]}${!isGodan ? 'られ' : ''}ます`;
      return `${stem}${conjugations[3]}${!isGodan ? 'られ' : ''}る`;
    case 'imperative':
      if (polite && negative) return `${stem}${aConjugation}ないでください`;
      if (negative) return `${stem}${conjugations[2]}${!isGodan ? 'る' : ''}な`;
      if (polite) return `${stem}${teForm}ください`;
      return `${stem}${conjugations[3]}${!isGodan ? 'ろ' : ''}`;
    case 'presumtive-volitional':
      if (polite && negative) return `${stem}${aConjugation}ないでしょう`;
      if (negative) return `${stem}${aConjugation}ないだろう`;
      if (polite) return `${stem}${conjugations[1]}ましょう / ${stem}${conjugations[2]}${!isGodan ? 'る' : ''}でしょう`;
      return `${stem}${conjugations[3]}${!isGodan ? 'よ' : ''}う / ${stem}${conjugations[2]}${!isGodan ? 'る' : ''}だろう`;
    default:
      return `${stem}${conjugations[3]}${!isGodan ? 'よう' : ''}`;
  }
};

const conjugateVerb = (verb, type) => {
  console.log(verb, type);
  return VERB_TENSES.map((tense) => [
    tense[1],
    [
      conjugateGodan({ verb, type, tense: tense[0] }),
      conjugateGodan({
        verb, type, tense: tense[0], polite: true,
      }),
    ],
    [
      conjugateGodan({
        verb, type, tense: tense[0], negative: true,
      }),
      conjugateGodan({
        verb, type, tense: tense[0], polite: true, negative: true,
      }),
    ],
  ]);
};

export default conjugateVerb;
