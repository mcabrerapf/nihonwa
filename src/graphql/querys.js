const GET_ALL_WORDS_QUERY =`
query ListWords(
  $filter: ModelWordModelFilterInput
  $nextToken: String
) {
    listWordModels(filter: $filter, limit: 999, nextToken: $nextToken) {
    items {
        id
        jp
        en
        furi
        notes
        types
        tags
    }
    nextToken
  }
}
`;

export { GET_ALL_WORDS_QUERY };
