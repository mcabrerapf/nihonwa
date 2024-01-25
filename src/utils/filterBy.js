import hasFilterMatch from './hasFilterMatch';
import hasTextMatch from './hasTextMatch';

const filterBy = (items, filters) => {
  const { text, tags } = filters;
  if (!text && !tags.length) return items;

  return items.filter((item) => {
    const hasTextSearchMatch = hasTextMatch(text, item);
    const hasTagMatch = hasFilterMatch(tags, 'tags', item);

    return hasTagMatch && hasTextSearchMatch;
  });
};

export default filterBy;
