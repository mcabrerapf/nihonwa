const checkIfCanProceed = (step, data) => {
  switch (step) {
    case 0:
      return !!data.jp;
    case 2:
      return !!data.en && !!data.en.length && data.en[0].length > 0;
    case 4:
      return !!data.types && !!data.types.length;
    default:
      return true;
  }
};

export { checkIfCanProceed };
