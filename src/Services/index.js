import { generateClient } from 'aws-amplify/api';
import { GET_ALL_SENTENCES, GET_ALL_WORDS } from '../graphql/querys';
import {
  CREATE_SENTENCE,
  CREATE_WORD,
  DELETE_SENTENCE,
  DELETE_WORD,
  UPDATE_SENTENCE,
  UPDATE_WORD,
} from '../graphql/mutations';
import { initSentenceData, initWordData } from '../utils';
// MODELS
// amplify/backend/api/nihonwa/schema.graphql
const client = generateClient();

const getAllWords = async ({ callback } = {}) => {
  try {
    const result = await client.graphql({ query: GET_ALL_WORDS });
    const {
      data: {
        listWords: { items },
      },
    } = result;
    const data = { data: items };
    return callback ? callback(data) : data;
  } catch (error) {
    console.log(error);
    return callback ? callback({ error }) : { error };
  }
};

const createWord = async ({ input, callback }) => {
  try {
    const parsedInput = initWordData(input);
    const result = await client.graphql({
      query: CREATE_WORD,
      variables: {
        input: parsedInput,
      },
    });
    const {
      data: { createWord: newWordData },
    } = result;
    const data = { data: newWordData };
    return callback ? callback(data) : data;
  } catch (error) {
    console.log(error);
    return callback ? callback({ error }) : { error };
  }
};

const updateWord = async ({ input, callback }) => {
  try {
    const parsedInput = initWordData(input);
    const result = await client.graphql({
      query: UPDATE_WORD,
      variables: {
        input: parsedInput,
      },
    });
    const {
      data: { updateWord: updatedWordData },
    } = result;
    const data = { data: updatedWordData };
    return callback ? callback(data) : data;
  } catch (error) {
    console.log(error);
    return callback ? callback({ error }) : { error };
  }
};

const deleteWord = async ({ input, callback }) => {
  try {
    const parsedInput = initWordData(input);
    await client.graphql({
      query: DELETE_WORD,
      variables: {
        input: { id: parsedInput.id },
      },
    });
    const data = { data: { id: parsedInput.id } };
    return callback ? callback(data) : data;
  } catch (error) {
    console.log(error);
    return callback ? callback({ error }) : { error };
  }
};

const getAllSentences = async ({ callback } = {}) => {
  try {
    const result = await client.graphql({ query: GET_ALL_SENTENCES });
    const {
      data: {
        listSentences: { items },
      },
    } = result;
    const data = { data: items };
    return callback ? callback(data) : data;
  } catch (error) {
    console.log(error);
    return callback ? callback({ error }) : { error };
  }
};

const createSentence = async ({ input, callback } = {}) => {
  try {
    const parsedInput = initSentenceData(input);
    const result = await client.graphql({
      query: CREATE_SENTENCE,
      variables: {
        input: parsedInput,
      },
    });
    const {
      data: { createSentence: newSentenceData },
    } = result;
    const data = { data: newSentenceData };
    return callback ? callback(data) : data;
  } catch (error) {
    console.log(error);
    return callback ? callback({ error }) : { error };
  }
};

const updateSentence = async ({ input, callback }) => {
  try {
    const parsedInput = initSentenceData(input);
    const result = await client.graphql({
      query: UPDATE_SENTENCE,
      variables: {
        input: parsedInput,
      },
    });
    const {
      data: { updateSentence: updatedSentenceData },
    } = result;
    const data = { data: updatedSentenceData };
    return callback ? callback(data) : data;
  } catch (error) {
    console.log(error);
    return callback ? callback({ error }) : { error };
  }
};

const deleteSentence = async ({ input, callback }) => {
  try {
    const parsedInput = initSentenceData(input);
    await client.graphql({
      query: DELETE_SENTENCE,
      variables: {
        input: { id: parsedInput.id },
      },
    });
    const data = { data: { id: parsedInput.id } };
    return callback ? callback(data) : data;
  } catch (error) {
    console.log(error);
    return callback ? callback({ error }) : { error };
  }
};

export {
  getAllWords,
  getAllSentences,
  createWord,
  createSentence,
  updateWord,
  updateSentence,
  deleteWord,
  deleteSentence,
};
