function containsHiragana(str) {
  if (!str) return false;
  const hiraganaRegex = /[\u3040-\u309F]/;
  return hiraganaRegex.test(str);
}

export default containsHiragana;
