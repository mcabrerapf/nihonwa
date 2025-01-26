const getChildrenAligmentClass = (aligment) => {
  switch (aligment) {
    case 'l':
      return 'align-left';
    case 'm':
      return 'align-center';
    case 'r':
      return 'align-right';
    default:
      return '';
  }
};

export default getChildrenAligmentClass;
