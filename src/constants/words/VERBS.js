import { FOOD, LITERATURE, LOCATION, MUSIC, SPORT } from "../TAGS";
import { KANJI, VERB } from "../TYPES";

const defaultWord = [
    {
        kana: '',
        en: [],
        tags: [],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
]

 const VERBS  = [
    {
        kana: 'すんでいます',
        en: ['Lives'],
        tags: [LOCATION],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'ききます',
        en: ['Listens'],
        tags: [MUSIC],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'みます',
        furi: ['み'],
        kanji: '見ます',
        en: ['Watches'],
        tags: [],
        types: [VERB, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'たべます',
        en: ['Eats'],
        tags: [FOOD],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
    {
        furi: ['よ'],
        kanji: '読みます',
        en: ['Reads'],
        tags: [LITERATURE],
        types: [VERB, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'します',
        en: ['Plays'],
        tags: [LITERATURE],
        types: [VERB, KANJI],
        notes: [],
        difficulty: 1,
    }
];

export default VERBS;