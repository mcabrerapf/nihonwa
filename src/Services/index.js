import { generateClient } from 'aws-amplify/api';
import { GET_ALL_WORDS } from '../graphql/querys';
import {
  CREATE_WORD,
  UPDATE_WORD,
  DELETE_WORD,
} from '../graphql/mutations';
import { initWordData } from '../utils';
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
    const data = { data: { id: parsedInput.id, jp: parsedInput.jp } };
    return callback ? callback(data) : data;
  } catch (error) {
    console.log(error);
    return callback ? callback({ error }) : { error };
  }
};

const getServiceToUse = (itemType, event) => {
  if (itemType === 'word') {
    switch (event) {
      case 'getAll':
        return getAllWords;
      case 'create':
        return createWord;
      case 'update':
        return updateWord;
      case 'delete':
        return deleteWord;

      default:
        return () => {};
    }
  }
  return () => {};
};

export {
  getServiceToUse,
  getAllWords,
  createWord,
  updateWord,
  deleteWord,
};
