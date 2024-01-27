import checkIfCharIsKanji from './checkIfCharIsKanji';

function getKanjiArrayFromString(string) {
  if (!string) return '';
  return string.split('').filter(checkIfCharIsKanji);
}

export default getKanjiArrayFromString;
