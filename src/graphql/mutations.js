const CREATE_WORD = `
mutation createWord(
  $input: CreateWordInput!
  $condition: ModelWordConditionInput
) {
  createWord(input: $input, condition: $condition) {
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
  }
}
`;

const UPDATE_WORD = `
mutation updateWord(
  $input: UpdateWordInput!
  $condition: ModelWordConditionInput
) {
  updateWord(input: $input, condition: $condition) {
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
  }
}
`;

const DELETE_WORD = `
mutation deleteWord(
  $input:  DeleteWordInput!
  $condition: ModelWordConditionInput
) {
  deleteWord(input: $input, condition: $condition) {
    id
  }
}
`;

const CREATE_SENTENCE = `
mutation createSentence(
  $input:  CreateSentenceInput!
  $condition: ModelSentenceConditionInput
) {
  createSentence(input: $input, condition: $condition) {
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
  }
}
`;

const UPDATE_SENTENCE = `
mutation updateSentence(
  $input:  UpdateSentenceInput!
  $condition: ModelSentenceConditionInput
) {
  updateSentence(input: $input, condition: $condition) {
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
  }
}
`;

const DELETE_SENTENCE = `
mutation deleteSentence(
  $input:  DeleteSentenceInput!
  $condition: ModelSentenceConditionInput
) {
  deleteSentence(input: $input, condition: $condition) {
    id
  }
}
`;

export {
  CREATE_WORD,
  UPDATE_WORD,
  DELETE_WORD,
  CREATE_SENTENCE,
  UPDATE_SENTENCE,
  DELETE_SENTENCE,
};
