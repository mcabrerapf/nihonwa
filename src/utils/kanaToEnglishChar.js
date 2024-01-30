import { KANA_EN_MATCHES } from '../constants';

const ySounds = ['ゃ', 'ゅ', 'ょ', 'ャ', 'ュ', 'ョ'];

const kanaToEnglishChar = (kana, next, prev) => {
  if (!kana) return '';
  if (kana.length > 1) {
    return kana
      .split('')
      .map((singleKana, i) => kanaToEnglishChar(singleKana, kana[i + 1], kana[i - 1]))
      .join('');
  }
  if (ySounds.includes(kana)) {
    return '';
  }

  if (ySounds.includes(next)) {
    return KANA_EN_MATCHES[`${kana}${next}`];
  }

  if (kana === 'ー') {
    const enMatch = KANA_EN_MATCHES[prev] || '';
    return enMatch[enMatch.length - 1] || '';
  }
  if ((kana === 'ッ' || kana === 'っ') && !!next) {
    return KANA_EN_MATCHES[next][0] || '';
  }
  return KANA_EN_MATCHES[`${kana}${next}`] || KANA_EN_MATCHES[kana] || '';
};

export default kanaToEnglishChar;
