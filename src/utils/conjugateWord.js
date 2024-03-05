import {
  GODAN, IADJECTIVE, ICHIDAN, NAADJECTIVE,
} from '../constants/TAGS';
import conjugateAdjective from './conjugateAdjective';
import conjugateVerb from './conjugateVerb';

const conjugateWord = (word, type) => {
  if (type === IADJECTIVE || type === NAADJECTIVE) return conjugateAdjective(word, type);
  if (type === GODAN || type === ICHIDAN || type === 'verb') return conjugateVerb(word, type);
  return [];
};

export default conjugateWord;
