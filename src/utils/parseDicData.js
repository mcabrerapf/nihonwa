function parseDicData(kanjiData) {
  if (!kanjiData) {
    return {
      meanings: [],
      onYomi: [],
      kunYomi: [],
    };
  }

  const onYomi = kanjiData.reading_meaning.rmgroup.reading
    .filter(({ '@_a_r_type': rType }) => rType === 'ja_on') || [];
  const kunYomi = kanjiData.reading_meaning.rmgroup.reading
    .filter(({ '@_a_r_type': rType }) => rType === 'ja_kun') || [];
  const meanings = kanjiData.reading_meaning.rmgroup.meaning
    .filter((meaning) => typeof meaning === 'string') || [];

  return {
    meanings,
    onYomi,
    kunYomi,
  };
}

export default parseDicData;