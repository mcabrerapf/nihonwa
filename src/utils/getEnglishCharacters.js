function getEnglishCharacters(string) {
  if (!string) return '';
  const englishCharactersOnly = string.replace(/[^a-zA-Z]/g, "");
  return englishCharactersOnly;
}

export default getEnglishCharacters;
