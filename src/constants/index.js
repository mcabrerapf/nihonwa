import NOUNS from "./words/NOUNS";
import OTHER from "./words/OTHER";
import VERBS from "./words/VERBS";
import { HIRAGANA, KATAKANA } from "./KANAS";

const WORDS = [
    ...OTHER,
    ...NOUNS,
    ...VERBS
];

export default WORDS;
export {
    OTHER,
    NOUNS,
    VERBS,
    HIRAGANA,
    KATAKANA
};