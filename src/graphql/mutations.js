const CREATE_WORD = `
mutation createWord(
  $input: CreateWordModelInput!
  $condition: ModelWordModelConditionInput
) {
  createWordModel(input: $input, condition: $condition) {
    id
    jp
    en
    furi
    notes
    tags
    types
    createdAt
    updatedAt
  }
}
`;

export { CREATE_WORD };
