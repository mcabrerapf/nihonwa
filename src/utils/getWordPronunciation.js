import kanaToEnglishChar from './kanaToEnglishChar';

const getWordPronunciation = ({ jp, furi = [] }) => {
  if (!jp) return '';
  // console.log('getWordPronunciation');
  return jp
    .split('')
    .map((kana, i) => {
      const currentKana = furi[i] || kana;
      const nextKana = furi[i + 1] || jp[i + 1];
      const prevKana = furi[i - 1] || jp[i - 1];
      return kanaToEnglishChar(currentKana, nextKana, prevKana);
    })
    .flat()
    .join('');
};

export default getWordPronunciation;
