function containsKanji(str) {
  if (!str) return false;
  const kanjiRegex = /[\u4E00-\u9FFF]/;
  return kanjiRegex.test(str);
}

export default containsKanji;
