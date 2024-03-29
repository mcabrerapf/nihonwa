import { CLOTHES, COLOR, COUNTRY, DRINK, ENTERTAINMENT, FAMILY, FOOD, HOUSE, MEDICINE, MUSIC, NATIONALITY, OCCUPATION, PERSON, PLACE, RAIN, SCHOOL, SPORT, THING, TRANSPORT } from "../TAGS";
import { KANJI, NOUN } from "../TYPES";

const defaultWord = [
    {
        jp: '',
        en: [],
        tags: [],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
]

 const NOUNS  = [
    {
        jp: 'べんとう',
        en: ['Boxed lunch'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'あさごはん',
        en: ['Breakfast'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'ひるごはん',
        en: ['Lunch'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'ばんごはん',
        en: ['Dinner'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'まんが',
        en: ['Manga'],
        tags: [ENTERTAINMENT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'やきゅう',
        en: ['Baseball'],
        tags: [SPORT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'ざっし',
        en: ['magazine'],
        tags: [ENTERTAINMENT, THING],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        furi: ['ほん'],
        jp: '本',
        en: ['Books'],
        tags: [ENTERTAINMENT, THING],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'おんがく',
        en: ['Music'],
        tags: [MUSIC, ENTERTAINMENT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'えいが',
        en: ['Movies'],
        tags: [ENTERTAINMENT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'かいしゃいん',
        en: ['Office worker'],
        tags: [OCCUPATION,PERSON],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'かんごし',
        en: ['Nurse'],
        tags: [OCCUPATION,PERSON, MEDICINE],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    //FAMILY
    {
        jp: 'かぞく',
        en: ['Family'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'つま',
        en: ['Wife'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'おっと',
        en: ['Husband'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'むすめ',
        en: ['Daughter'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'むすこ',
        en: ['Son'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'いもうと',
        en: ['Younger sister'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'あね',
        en: ['Older sister'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'おとうと',
        en: ['Younger brother'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'あに',
        en: ['Older brother'],
        tags: [PERSON, FAMILY],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        furi: ['ちち'],
        jp: '父',
        en: ['Dad'],
        tags: [PERSON, FAMILY],
        types: [NOUN,KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        furi: ['はは'],
        jp: '母',
        en: ['Mom'],
        tags: [PERSON, FAMILY],
        types: [NOUN,KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'まち',
        en: ['Town', 'Wait', 'City'],
        tags: [PLACE],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'とし',
        en: ['City'],
        tags: [PLACE],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'おおさか',
        en: ['Osaka'],
        tags: [PLACE],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        furi: ['きょう','と'],
        jp: '京都',
        en: ['Kyoto'],
        tags: [PLACE],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'かばん',
        en: ['bag'],
        tags: [THING],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: '田中',
        furi:['た','なか'],
        en: ['Tanaka last name'],
        tags: [PERSON],
        types: [NOUN,KANJI],
        notes: [],
        difficulty: 1,
    },
    //Numbers
    {
        jp: 'いち',
        furi:['いち'],
        jp: '一',
        en: ['One','An', 'A'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'に',
        furi:['に'],
        jp: '二',
        en: ['Two'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'さん',
        furi:['さん'],
        jp: '三',
        en: ['Three', 'Third'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        furi:['よん'],
        jp: '四',
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
        jp: 'ご',
        furi:['ご'],
        jp: '五',
        en: ['Five'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'ろく',
        furi:['ろく'],
        jp: '六',
        en: ['Six'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'なな',
        furi:['なな'],
        jp: '七',
        en: ['Seven'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'はち',
        furi:['はち'],
        jp: '八',
        en: ['Eight'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'きゅう',
        furi:['きゅう'],
        jp: '九',
        en: ['Nine'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'じゅう',
        furi:['じゅう'],
        jp: '十',
        en: ['Ten'],
        tags: [],
        types: [NOUN, KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'しろい',
        en: ['White'],
        tags: [COLOR],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'あかい',
        en: ['Red'],
        tags: [COLOR],
        types: [NOUN],
        notes: ['Test note'],
        difficulty: 1,
    },
    {
        jp: 'ぼうし',
        en: ['Hat(s)'],
        tags: [CLOTHES],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'えき',
        en: ['Station(s)','Train station(s)'],
        tags: [TRANSPORT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'にほん',
        furi: ['に','ほん'],
        jp: '日本',
        en: ['Japan'],
        tags: [COUNTRY,PLACE],
        types: [NOUN,KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'にほんじん',
        furi: ['に','ほん'],
        jp: '日本じん',
        en: ['Japanese nationality'],
        tags: [COUNTRY,PLACE,PERSON,NATIONALITY],
        types: [NOUN,KANJI],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'だいがく',
        en: ['University','College'],
        tags: [SCHOOL],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'だいがくせい',
        en: ['College student','College students'],
        tags: [SCHOOL],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'がくせい',
        en: ['Student','Students'],
        tags: [SCHOOL],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'ひと',
        en: ['Person', 'People'],
        tags: [],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'べんごし',
        en: ['Lawyer', 'Lawyers'],
        tags: [OCCUPATION],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'せんせい',
        en: ['Teacher', 'Teachers','Professor'],
        tags: [OCCUPATION],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'いしゃ',
        en: ['Doctor','Doctors'],
        tags: [OCCUPATION],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'ちかてつ',
        en: ['Subway'],
        tags: [TRANSPORT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'かさ',
        en: ['Umbrella'],
        tags: [THING, RAIN],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {     
        jp: 'きっぷ',    
        en: ['Ticket'],
        tags: [TRANSPORT, THING],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'くつ',
        en: ['Shoe(s)'],
        tags: [CLOTHES,HOUSE],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'ちず',
        en: ['Map'],
        tags: [TRANSPORT, THING],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'くうこう',
        en: ['Airport'],
        tags: [TRANSPORT],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'みず',
        en: ['Water', 'Waters'],
        tags: [DRINK],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'おちゃ',
        en: ['Green tea','Tea'],
        tags: [DRINK],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'ごはん',
        en: ['Rice','Meal','Meals'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
    {
        jp: 'すし',
        en: ['Sushi'],
        tags: [FOOD],
        types: [NOUN],
        notes: [],
        difficulty: 1,
    },
];

export default NOUNS