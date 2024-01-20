const initWordData = (data = {}) => {
  const initData = {
    jp: data.jp || "",
    furi: data.furi || [],
    en: data.en || [],
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
