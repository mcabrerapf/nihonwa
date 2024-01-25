import getWordPronunciation from './getWordPronunciation';

const sortBy = (items, lan, dir) => items.sort((a, b) => {
  const valueA = lan === 'en' ? a.en[0].toLowerCase() : getWordPronunciation(a);
  const valueB = lan === 'en' ? b.en[0].toLowerCase() : getWordPronunciation(b);
  if (valueA < valueB) return dir === 'desc' ? -1 : 1;
  if (valueA > valueB) return dir === 'desc' ? 1 : -1;
  return 0;
});

export default sortBy;
