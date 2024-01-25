import checkIfCharIsKanji from './checkIfCharIsKanji';

function getKanjiFromString(string) {
  if (!string) return '';
  return string.split('').filter(checkIfCharIsKanji).join('');
}

export default getKanjiFromString;
