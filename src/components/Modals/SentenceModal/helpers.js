const initSentenceData = (data = {}) => {
  const initData = {
    jpWords: data.jpWords || [""],
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
      return !!data.jpWords && !!data.jpWords.length && !!data.jpWords[0];
    case 1:
      return !!data.en && !!data.en.length;
    case 3:
      return !!data.types && !!data.types.length;
    default:
      return true;
  }
};

export { initSentenceData, checkIfCanProceed };
