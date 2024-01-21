const GET_ALL_WORDS = `
query listWords(
  $filter: ModelWordFilterInput
  $nextToken: String
) {
    listWords(filter: $filter, limit: 999, nextToken: $nextToken) {
    items {
        id
        jp
        en
        furi
        notes
        types
        tags
        hits
        misses
        difficulty
        createdAt
        updatedAt
    }
    nextToken
  }
}
`;

const GET_ALL_SENTENCES = `
query listSentences(
  $filter: ModelSentenceFilterInput
  $nextToken: String
) {
    listSentences(filter: $filter, limit: 999, nextToken: $nextToken) {
    items {
        id
        jpWords
        en
        furi
        notes
        types
        tags
        hits
        misses
        difficulty
        createdAt
        updatedAt
    }
    nextToken
  }
}
`;

export { GET_ALL_WORDS, GET_ALL_SENTENCES };
