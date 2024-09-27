/* eslint-disable no-param-reassign */
import getWordPronunciation from './getWordPronunciation';
import hasFilterMatch from './hasFilterMatch';
import hasTextMatch from './hasTextMatch';

const filterBy = (items, filters) => {
  const { text, tags } = filters;
  // TODO have a second look at this

  if (!text && !tags.length) {
    return items.slice().sort((a, b) => {
      a.match = true;
      b.match = true;
      const valueA = getWordPronunciation(a);
      const valueB = getWordPronunciation(b);
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });
  }

  return items.slice().sort((itemA, itemB) => {
    const hasTextSearchMatchA = hasTextMatch(text, itemA);
    const hasTagMatchA = hasFilterMatch(tags, 'tags', itemA);
    const aMatch = hasTagMatchA && hasTextSearchMatchA;

    const hasTextSearchMatchB = hasTextMatch(text, itemB);
    const hasTagMatchB = hasFilterMatch(tags, 'tags', itemB);
    const bMatch = hasTagMatchB && hasTextSearchMatchB;

    itemA.match = aMatch;
    itemB.match = bMatch;
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;
    return 0;
  });
};
export default filterBy;
