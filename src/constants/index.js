import NOUNS from "./words/NOUNS";
import OTHERS from "./words/OTHERS";
import VERBS from "./words/VERBS";
import FOREIGNS from "./words/FOREIGNS";
import ADJECTIVES from "./words/ADJECTIVES";
import TAGS from "./TAGS";
import TYPES from "./TYPES";
import {
  HIRAGANA,
  KATAKANA,
  EN_HIRAGANA_MATCHES,
  EN_KATAKANA_MATCHES,
  KANA_EN_MATCHES,
} from "./KANAS";
import SENTENCES from "./sentences";

const WORDS = [...OTHERS, ...NOUNS, ...VERBS, ...ADJECTIVES, ...FOREIGNS];

export default WORDS;
export {
  ADJECTIVES,
  EN_HIRAGANA_MATCHES,
  EN_KATAKANA_MATCHES,
  FOREIGNS,
  HIRAGANA,
  KATAKANA,
  KANA_EN_MATCHES,
  NOUNS,
  OTHERS,
  SENTENCES,
  TAGS,
  TYPES,
  VERBS,
  WORDS,
};
