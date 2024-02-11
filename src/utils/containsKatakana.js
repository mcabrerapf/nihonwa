function containsKatakana(str) {
  if (!str) return false;
  const katakanaRegex = /[\u30A0-\u30FF]/;
  return katakanaRegex.test(str);
}

export default containsKatakana;
