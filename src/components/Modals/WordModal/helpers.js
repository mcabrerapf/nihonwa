const initWordData = (data = {}) => {
  const initData = {
    jp: data.jp || "",
    en: data.en || [],
    furi: data.furi || [],
    notes: data.notes || [],
    types: data.types || [],
    tags: data.tags || [],
    hits: data.hits || 1,
    misses: data.misses || 1,
    difficulty: data.difficulty || 1,
  };
  if (data.id) initData.id = data.id;
  return initData;
};

const checkIfCanProceed = (step, data) => {
  switch (step) {
    case 0:
      return !!data.jp;
    case 2:
      return !!data.en && !!data.en.length;
    case 4:
      return !!data.types && !!data.types.length;
    default:
      return true;
  }
};

export { initWordData, checkIfCanProceed };
