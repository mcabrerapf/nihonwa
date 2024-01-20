import hasFilterMatch from "./hasFilterMatch";
import hasTextMatch from "./hasTextMatch";

const filterBy = (items, filters) => {
  const { text, tags, types } = filters;
  if (!text && !tags.length && !types.length) return items;

  return items.filter((item) => {
    const hasTextSearchMatch = hasTextMatch(text, item);
    const hasTagMatch = hasFilterMatch(tags, "tags", item);
    const hasTypeMatch = hasFilterMatch(types, "types", item);

    return hasTagMatch && hasTypeMatch && hasTextSearchMatch;
  });
};

export default filterBy;
