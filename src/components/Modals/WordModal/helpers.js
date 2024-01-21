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

export { checkIfCanProceed };
