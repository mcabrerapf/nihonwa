import NOUNS from "./words/NOUNS";
import OTHERS from "./words/OTHERS";
import VERBS from "./words/VERBS";
import FOREIGNS from "./words/FOREIGNS";
import ADJECTIVES from "./words/ADJECTIVES";
import { HIRAGANA, KATAKANA } from "./KANAS";
import SENTENCES from "./sentences";

const WORDS = [
    ...OTHERS,
    ...NOUNS,
    ...VERBS,
    ...ADJECTIVES,
    ...FOREIGNS
];

export default WORDS;
export {
    ADJECTIVES,
    FOREIGNS,
    NOUNS,
    OTHERS,
    SENTENCES,
    VERBS,
    HIRAGANA,
    KATAKANA,
    WORDS
};