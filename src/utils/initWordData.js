const initWordData = (data = {}) => {
  const initData = {
    jp: data.jp || '',
    en: data.en || [],
    furi: data.furi || [],
    notes: data.notes || [],
    types: [],
    tags: data.tags || [],
    hits: data.hits || 0,
    misses: data.misses || 0,
    difficulty: data.difficulty || 0,
  };
  if (data.id) initData.id = data.id;
  return initData;
};

export default initWordData;
