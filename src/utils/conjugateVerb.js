import { HIRAGANA, VERB_TENSES } from '../constants';
import { GODAN, ICHIDAN } from '../constants/TAGS';

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

const getPastIndicative = (stem, ending) => {
  if (stem === '行') return 'った';
  if (['う', 'つ', 'る'].includes(ending)) return 'った';
  if (['む', 'ぶ', 'ぬ'].includes(ending)) return 'んだ';
  if (ending === 'く') return 'いた';
  if (ending === 'ぐ') return 'いだ';
  if (ending === 'す') return 'した';
  return 'た';
};

const conjugateDesu = (tense = '', polite = false, negative = false) => {
  switch (tense) {
    case 'present':
      if (polite && negative) return 'でわありません';
      if (negative) return 'でわない';
      if (polite) return 'です';
      return 'だ';
    case 'past':
      if (polite && negative) return 'でわありません';
      if (negative) return 'でわなかった';
      if (polite) return 'でした';
      return 'だった';
    case 'probable':
      if (polite && negative) return 'でわないだしょう';
      if (negative) return 'でわないだろう';
      if (polite) return 'でしょう';
      return 'だろう';
    default:
      return '';
  }
};

const conjugateAru = (tense = '', polite = false, negative = false) => {
  switch (tense) {
    case 'present':
      if (polite && negative) return 'ありません';
      if (negative) return 'ない';
      if (polite) return 'あります';
      return 'ある';
    case 'past':
      if (polite && negative) return 'ありませんでした';
      if (negative) return 'なかった';
      if (polite) return 'ありました';
      return 'あった';
    case 'probable':
      if (polite && negative) return 'ないでしょう';
      if (negative) return 'ないだろう';
      if (polite) return 'あるでしょう';
      return 'あるだろう';
    default:
      return '';
  }
};

const conjugateIru = (tense = '', polite = false, negative = false) => {
  switch (tense) {
    case 'present':
      if (polite && negative) return 'いません';
      if (negative) return 'いない';
      if (polite) return 'います';
      return 'いる';
    case 'past':
      if (polite && negative) return 'いませんでした';
      if (negative) return 'いなかった';
      if (polite) return 'いました';
      return 'いった';
    case 'probable':
      if (polite && negative) return 'いないでしょう';
      if (negative) return 'いないだろう';
      if (polite) return 'いるでしょう';
      return 'いるだろう';
    default:
      return '';
  }
};

const conjugateSuru = (tense = '', polite = false, negative = false) => {
  switch (tense) {
    case 'present-indicative':
      if (polite && negative) return 'しません';
      if (negative) return 'しない';
      if (polite) return 'します';
      return 'する';
    case 'past-indicative':
      if (polite && negative) return 'しませんでした';
      if (negative) return 'しなかった';
      if (polite) return 'しました';
      return 'した';
    case 'presumtive-volitional':
      if (polite && negative) return 'しないでしょう';
      if (negative) return 'しないだろう';
      if (polite) return 'しましょう/するでしょう';
      return 'しよう/するだろう';
    case 'past-presumtive':
      if (polite && negative) return 'しなかたでしょう';
      if (negative) return 'しなかっただろう';
      if (polite) return 'しましたろう';
      return 'したろう/しただろう';
    case 'present-progressive':
      if (polite && negative) return 'していません';
      if (negative) return '---';
      if (polite) return 'しています';
      return '---';
    case 'past-progressive':
      if (polite && negative) return 'していませんでした';
      if (negative) return '---';
      if (polite) return 'していました';
      return '---';
    case 'provisional':
      if (polite && negative) return 'しませんなら';
      if (negative) return 'しなければ';
      if (polite) return 'しませば/しますれば';
      return 'すれば';
    case 'conditional':
      if (polite && negative) return 'しませんでしたら';
      if (negative) return 'しなかったら';
      if (polite) return 'しましたら';
      return 'したら';
    case 'potential':
      if (polite && negative) return 'できません';
      if (negative) return 'できない';
      if (polite) return 'できます';
      return 'できる';
    case 'causative':
      if (polite && negative) return '';
      if (negative) return '';
      if (polite) return '';
      return 'させる';
    case 'imperative':
      if (polite && negative) return 'しないでください';
      if (negative) return 'するな';
      if (polite) return 'してください';
      return 'しろ';
    default:
      return '';
  }
};

const conjugateKuru = (tense = '', polite = false, negative = false) => {
  switch (tense) {
    case 'infinitive':
      if (polite && negative) return '';
      if (negative) return '';
      if (polite) return '';
      return '来(き)';
    case 'te':
      if (polite && negative) return '';
      if (negative) return '';
      if (polite) return '';
      return '来て';
    case 'passive':
      if (polite && negative) return '';
      if (negative) return '';
      if (polite) return '';
      return '来(こ)られる';
    case 'present-indicative':
      if (polite && negative) return '来ません';
      if (negative) return '来(こ)ない';
      if (polite) return '来ます';
      return '来(く)る';
    case 'past-indicative':
      if (polite && negative) return '来ませんでした';
      if (negative) return '来(こ)なかった';
      if (polite) return '来ました';
      return '来た';
    case 'presumtive-volitional':
      if (polite && negative) return '来(こ)ないでしょう';
      if (negative) return '来(こ)ないだろう';
      if (polite) return '来ましょう/来(く)るでしょう';
      return '来(こ)よう/来(く)るだろう';
    case 'past-presumtive':
      if (polite && negative) return '来(こ)なかったでしょう';
      if (negative) return '来(こ)なかっただろう';
      if (polite) return '来たでしょう';
      return '来たろう/来ただろう';
    case 'provisional':
      if (polite && negative) return '来ませんなら';
      if (negative) return '来(こ)なければ';
      if (polite) return '来ませば/来ますれば';
      return '来(く)れば';
    case 'conditional':
      if (polite && negative) return '来ませんでしたら';
      if (negative) return '来(こ)なかったら';
      if (polite) return '来ましたら';
      return '来たら';
    case 'potential':
      if (polite && negative) return '来(こ)られません';
      if (negative) return '来(こ)られない';
      if (polite) return '来(こ)られます';
      return '来(こ)られる';
    case 'causative':
      if (polite && negative) return '来(こ)させません';
      if (negative) return '来(こ)させない';
      if (polite) return '来(こ)させます';
      return '来(こ)させる';
    case 'imperative':
      if (polite && negative) return '来(こ)ないでください';
      if (negative) return '来(く)るな';
      if (polite) return '来てください';
      return '来(こ)い';
    default:
      return '';
  }
};

const getConjugation = ({
  verb = '', tense = '', type = GODAN, polite = false, negative = false,
}) => {
  if (verb === 'する') return conjugateSuru(tense, polite, negative);
  if (verb === '来る') return conjugateKuru(tense, polite, negative);
  if (verb === 'です') return conjugateDesu(tense, polite, negative);
  if (verb === 'ある') return conjugateAru(tense, polite, negative);
  if (verb === 'いる') return conjugateIru(tense, polite, negative);
  const isGodan = type === GODAN;
  const isIChidan = type === ICHIDAN;
  if (!isGodan && !isIChidan) return '';
  const stem = verb.substring(0, verb.length - 1);

  const ending = isGodan ? verb.substring(verb.length - 1) : '';
  const conjugations = HIRAGANA.flat().find((syllables) => !!syllables.includes(ending)) || ['', '', '', '', ''];
  const teForm = getTeForm(stem, ending, type);
  const pastIndicativeEnding = getPastIndicative(stem, ending);
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
      return '';
  }
};

const conjugateVerb = (verb, type) => VERB_TENSES.map((tense) => [
  tense[1],
  [
    getConjugation({ verb, type, tense: tense[0] }),
    getConjugation({
      verb, type, tense: tense[0], polite: true,
    }),
  ].filter(Boolean),
  [
    getConjugation({
      verb, type, tense: tense[0], negative: true,
    }),
    getConjugation({
      verb, type, tense: tense[0], polite: true, negative: true,
    }),
  ].filter(Boolean),
]);

export default conjugateVerb;
