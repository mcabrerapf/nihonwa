import { CLOTHES, COLOR, COUNTRY, DRINK, ENTERTAINMENT, FAMILY, FOOD, HOUSE, MEDICINE, MUSIC, NATIONALITY, OCCUPATION, PERSON, PLACE, RAIN, SCHOOL, SPORT, THING, TRANSPORT } from "../TAGS";
import { KANJI, NOUN } from "../TYPES";

const defaultWord = [
    {
        kana: '',
        en: [],
        tags: [],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
]

 const NOUNS  = [
    {
        kana: 'べんとう',
        en: ['Boxed lunch'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'あさごはん',
        en: ['Breakfast'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'ひるごはん',
        en: ['Lunch'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'ばんごはん',
        en: ['Dinner'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'まんが',
        en: ['Manga'],
        tags: [ENTERTAINMENT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'やきゅう',
        en: ['Baseball'],
        tags: [SPORT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'ざっし',
        en: ['magazine'],
        tags: [ENTERTAINMENT, THING],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        furi: ['ほん'],
        kanji: '本',
        en: ['Books'],
        tags: [ENTERTAINMENT, THING],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'おんがく',
        en: ['Music'],
        tags: [MUSIC, ENTERTAINMENT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'えいが',
        en: ['Movies'],
        tags: [ENTERTAINMENT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'かいしゃいん',
        en: ['Office worker'],
        tags: [OCCUPATION,PERSON],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'かんごし',
        en: ['Nurse'],
        tags: [OCCUPATION,PERSON, MEDICINE],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    //FAMILY
    {
        kana: 'かぞく',
        en: ['Family'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'つま',
        en: ['Wife'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'おっと',
        en: ['Husband'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'むすめ',
        en: ['Daughter'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'むすこ',
        en: ['Son'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'いもうと',
        en: ['Younger sister'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'あね',
        en: ['Older sister'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'おとうと',
        en: ['Younger brother'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'あに',
        en: ['Older brother'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        furi: ['ちち'],
        kanji: '父',
        en: ['Dad'],
        tags: [PERSON, FAMILY],
        types: [NOUN,KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        furi: ['はは'],
        kanji: '母',
        en: ['Mom'],
        tags: [PERSON, FAMILY],
        types: [NOUN,KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'まち',
        en: ['Town', 'Wait', 'City'],
        tags: [PLACE],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'とし',
        en: ['City'],
        tags: [PLACE],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'おおさか',
        en: ['Osaka'],
        tags: [PLACE],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        furi: ['きょう','と'],
        kanji: '京都',
        en: ['Kyoto'],
        tags: [PLACE],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'かばん',
        en: ['bag'],
        tags: [THING],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kanji: '田中',
        furi:['た','なか'],
        en: ['Tanaka last name'],
        tags: [PERSON],
        types: [NOUN,KANJI],
        notes: [],
        difficulty: 1,
    },
    //Numbers
    {
        kana: 'いち',
        furi:['いち'],
        kanji: '一',
        en: ['One','An', 'A'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'に',
        furi:['に'],
        kanji: '二',
        en: ['Two'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'さん',
        furi:['さん'],
        kanji: '三',
        en: ['Three', 'Third'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        furi:['よん'],
        kanji: '四',
        en: ['Four'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [
            'Can also be pronounced shi',
            'But best avoid'
        ],
        difficulty: 1,
    },
    {
        kana: 'ご',
        furi:['ご'],
        kanji: '五',
        en: ['Five'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'ろく',
        furi:['ろく'],
        kanji: '六',
        en: ['Six'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'なな',
        furi:['なな'],
        kanji: '七',
        en: ['Seven'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'はち',
        furi:['はち'],
        kanji: '八',
        en: ['Eight'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'きゅう',
        furi:['きゅう'],
        kanji: '九',
        en: ['Nine'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'じゅう',
        furi:['じゅう'],
        kanji: '十',
        en: ['Ten'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'しろい',
        en: ['White'],
        tags: [COLOR],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'あかい',
        en: ['Red'],
        tags: [COLOR],
        types: [NOUN],
        notes: ['Test note'],
        difficulty: 1,
    },
    {
        kana: 'ぼうし',
        en: ['Hat(s)'],
        tags: [CLOTHES],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'えき',
        en: ['Station(s)','Train station(s)'],
        tags: [TRANSPORT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'にほん',
        furi: ['に','ほん'],
        kanji: '日本',
        en: ['Japan'],
        tags: [COUNTRY,PLACE],
        types: [NOUN,KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'にほんじん',
        furi: ['に','ほん'],
        kanji: '日本じん',
        en: ['Japanese nationality'],
        tags: [COUNTRY,PLACE,PERSON,NATIONALITY],
        types: [NOUN,KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'だいがく',
        en: ['University','College'],
        tags: [SCHOOL],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'だいがくせい',
        en: ['College student','College students'],
        tags: [SCHOOL],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'がくせい',
        en: ['Student','Students'],
        tags: [SCHOOL],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'ひと',
        en: ['Person', 'People'],
        tags: [],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'べんごし',
        en: ['Lawyer', 'Lawyers'],
        tags: [OCCUPATION],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'せんせい',
        en: ['Teacher', 'Teachers','Professor'],
        tags: [OCCUPATION],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'いしゃ',
        en: ['Doctor','Doctors'],
        tags: [OCCUPATION],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'ちかてつ',
        en: ['Subway'],
        tags: [TRANSPORT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'かさ',
        en: ['Umbrella'],
        tags: [THING, RAIN],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {     
        kana: 'きっぷ',    
        en: ['Ticket'],
        tags: [TRANSPORT, THING],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'くつ',
        en: ['Shoe(s)'],
        tags: [CLOTHES,HOUSE],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'ちず',
        en: ['Map'],
        tags: [TRANSPORT, THING],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'くうこう',
        en: ['Airport'],
        tags: [TRANSPORT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'みず',
        en: ['Water', 'Waters'],
        tags: [DRINK],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'おちゃ',
        en: ['Green tea','Tea'],
        tags: [DRINK],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'ごはん',
        en: ['Rice','Meal','Meals'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        kana: 'すし',
        en: ['Sushi'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
];

export default NOUNS