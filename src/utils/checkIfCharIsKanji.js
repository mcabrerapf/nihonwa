function checkIfCharIsKanji(character) {
  const codePoint = character.codePointAt(0);

  return (
    (codePoint >= 0x4e00 && codePoint <= 0x9faf)
    || (codePoint >= 0x3400 && codePoint <= 0x4dbf)
  );
}

export default checkIfCharIsKanji;
