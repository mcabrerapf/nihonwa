import NOUNS from "./words/NOUNS";
import OTHER from "./words/OTHER";
import VERBS from "./words/VERBS";
import FOREIGN from "./words/FOREIGN";
import ADJECTIVES from "./words/ADJECTIVES";
import { HIRAGANA, KATAKANA } from "./KANAS";

const WORDS = [
    ...OTHER,
    ...NOUNS,
    ...VERBS,
    ...ADJECTIVES,
    ...FOREIGN
];

export default WORDS;
export {
    FOREIGN,
    ADJECTIVES,
    OTHER,
    NOUNS,
    VERBS,
    HIRAGANA,
    KATAKANA
};