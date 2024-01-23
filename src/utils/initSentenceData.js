//TODO remove this once all types removed

const getUpdatedTags = (data) => {
  const { tags, types } = data;
  if (!types || !types.length) return tags || [];
  const aaa = tags ? [...tags, ...types] : [...types];
  const uniqueArray = [...new Set(aaa)];
  return uniqueArray;
};

const initSentenceData = (data = {}) => {
  const initData = {
    jpWords: data.jpWords || [""],
    en: data.en || [],
    furi: data.furi || [],
    notes: data.notes || [],
    types: [],
    tags: getUpdatedTags(data),
    hits: data.hits || 1,
    misses: data.misses || 1,
    difficulty: data.difficulty || 1,
  };
  if (data.id) initData.id = data.id;
  return initData;
};

export default initSentenceData;
