import { FOOD, LITERATURE, LOCATION, MUSIC, SPORT } from "../TAGS";
import { KANJI, VERB } from "../TYPES";

const defaultWord = [
    {
        kana: '',
        kanji: '',
        en: [],
        sound: '',
        tags: [],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
]

 const VERBS  = [
    {
        kana: 'すんでいます',
        kanji: '',
        en: ['Lives'],
        sound: 'sundeimasu',
        tags: [LOCATION],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'ききます',
        kanji: '',
        en: ['Listens'],
        sound: 'kikimasu',
        tags: [MUSIC],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'みます',
        furi: ['み'],
        kanji: '見ます',
        en: ['Looks'],
        sound: 'mimasu',
        tags: [],
        types: [VERB, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'たべます',
        kanji: '',
        en: ['Eats'],
        sound: 'tabemasu',
        tags: [FOOD],
        types: [VERB],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'よみます',
        furi: ['よ'],
        kanji: '読みます',
        en: ['Reads'],
        sound: 'yomimasu',
        tags: [LITERATURE],
        types: [VERB, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'します',
        en: ['Plays'],
        sound: 'shimasu',
        tags: [LITERATURE],
        types: [VERB, KANJI],
        notes: [],
        difficulty: 1,
    }
];

export default VERBS;