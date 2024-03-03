import { ADJECTIVE_TENSES } from '../constants';
import { NAADJECTIVE } from '../constants/TAGS';

const getConjugation = ({
  adjective = '', tense = '', type = 'na', polite = false, negative = false,
}) => {
  const stem = adjective.substring(0, adjective.length - 1);
  const isNaAdjective = type === NAADJECTIVE;

  switch (tense) {
    case 'adverb':
      if (polite && negative) return '';
      if (negative) return '';
      if (polite) return '';
      return `${isNaAdjective ? adjective : stem}${isNaAdjective ? 'に' : 'く'}`;
    case 'present':
      if (polite && negative) return `${isNaAdjective ? adjective : stem}${isNaAdjective ? 'ではありません' : 'くありません'}`;
      if (negative) return `${isNaAdjective ? adjective : stem}${isNaAdjective ? 'ではない' : 'くない'}`;
      if (polite) return `${adjective}${isNaAdjective ? 'です' : 'です'}`;
      return `${adjective}${isNaAdjective ? 'だ' : ''}`;
    case 'past':
      if (polite && negative) return `${isNaAdjective ? adjective : stem}${isNaAdjective ? 'ではありませんでした' : 'くありませんでした'}`;
      if (negative) return `${isNaAdjective ? adjective : stem}${isNaAdjective ? 'ではなかった' : 'くなかった'}`;
      if (polite) return `${isNaAdjective ? adjective : stem}${isNaAdjective ? 'でした' : 'かったです'}`;
      return `${isNaAdjective ? adjective : stem}${isNaAdjective ? 'だった' : 'かった'}`;

    default:
      return '';
  }
};

const conjugateAdjective = (adjective, type) => ADJECTIVE_TENSES.map((tense) => [
  tense[1],
  [
    getConjugation({ adjective, type, tense: tense[0] }),
    getConjugation({
      adjective, type, tense: tense[0], polite: true,
    }),
  ],
  [
    getConjugation({
      adjective, type, tense: tense[0], negative: true,
    }),
    getConjugation({
      adjective, type, tense: tense[0], polite: true, negative: true,
    }),
  ],
]);

export default conjugateAdjective;
