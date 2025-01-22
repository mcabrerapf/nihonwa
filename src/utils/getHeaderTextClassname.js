const getHeaderTextClassname = (headerCharacters) => {
  const headerLength = headerCharacters.length;
  if (headerLength > 29) return 'xs';
  if (headerLength > 10) return 's';
  return null;
};

export default getHeaderTextClassname;
