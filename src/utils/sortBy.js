// import calculateSuccessRate from './calculateSuccesRate';
// import getWordPronunciation from './getWordPronunciation';

// const sortBy = (items, lan, dir) => items.slice().sort((a, b) => {
//   if (lan === '%') {
//     const aSuccess = calculateSuccessRate(a.hits, a.misses);
//     const bSuccess = calculateSuccessRate(b.hits, b.misses);
//     if (aSuccess < bSuccess) return dir === 'dsc' ? -1 : 1;
//     if (aSuccess > bSuccess) return dir === 'dsc' ? 1 : -1;
//     return 0;
//   }
//   const valueA = lan === 'en' ? a.en[0].toLowerCase() : getWordPronunciation(a);
//   const valueB = lan === 'en' ? b.en[0].toLowerCase() : getWordPronunciation(b);
//   if (valueA < valueB) return dir === 'dsc' ? -1 : 1;
//   if (valueA > valueB) return dir === 'dsc' ? 1 : -1;
//   return 0;
// });

const sortBy = (items) => items;

export default sortBy;
