import { FOOD, LITERATURE, LOCATION, MUSIC, SPORT } from "../TAGS";
import { KANJI, VERB } from "../TYPES";

const defaultWord = [
    {
        jp: '',
        en: [],
        tags: [],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
]

 const VERBS  = [
    {
        jp: 'すんでいます',
        en: ['Lives'],
        tags: [LOCATION],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'ききます',
        en: ['Listens'],
        tags: [MUSIC],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'みます',
        furi: ['み'],
        jp: '見ます',
        en: ['Watches'],
        tags: [],
        types: [VERB, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'たべます',
        en: ['Eats'],
        tags: [FOOD],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
    {
        furi: ['よ'],
        jp: '読みます',
        en: ['Reads'],
        tags: [LITERATURE],
        types: [VERB, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'します',
        en: ['Plays'],
        tags: [LITERATURE],
        types: [VERB, KANJI],
        notes: [],
        difficulty: 1,
    }
];

export default VERBS;