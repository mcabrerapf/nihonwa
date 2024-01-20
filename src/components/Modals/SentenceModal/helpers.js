const initSentenceData = (data = {}) => {
  const initData = {
    jpWords: data.jpWords || [],
    en: data.en || "",
    fur: data.furi || [],
    notes: data.notes || [],
    types: data.types || [],
    tags: data.tags || [],
  };

  if (data.id) initData.id = data.id;
  return initData;
};

const checkIfCanProceed = (step, data) => {
  switch (step) {
    case 0:
      return !!data.jpWords && !!data.jpWords.length;
    case 1:
      return !!data.en && !!data.en.length;
    case 3:
      return !!data.types && !!data.types.length;
    default:
      return true;
  }
};

export { initSentenceData, checkIfCanProceed };
