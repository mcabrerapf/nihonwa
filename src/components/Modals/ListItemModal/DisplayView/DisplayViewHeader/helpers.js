const getHeaderTextClassName = (headerCharacters) => {
  const headerLength = headerCharacters.length;
  if (headerLength > 29) return "kana xs";
  if (headerLength > 10) return "kana s";
  return "kana";
};

export { getHeaderTextClassName };
