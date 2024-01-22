const checkIfCanProceed = (step, data) => {
  switch (step) {
    case 0:
      return !!data.jpWords && !!data.jpWords.length && !!data.jpWords[0];
    case 1:
      return !!data.en && !!data.en.length && !!data.en[0];
    case 3:
      return !!data.types && !!data.types.length;
    default:
      return true;
  }
};

export { checkIfCanProceed };
