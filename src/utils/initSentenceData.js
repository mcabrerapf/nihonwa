const initSentenceData = (data = {}) => {
  const initData = {
    jp: data.jp || '',
    en: data.en || [],
    furi: data.furi || [],
    notes: data.notes || [],
    types: [],
    tags: data.tags || [],
    hits: data.hits || 1,
    misses: data.misses || 1,
    difficulty: data.difficulty || 1,
  };
  if (data.id) initData.id = data.id;
  return initData;
};

export default initSentenceData;
