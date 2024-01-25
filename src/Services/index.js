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

const getAllWords = async () => {
  try {
    const result = await client.graphql({ query: GET_ALL_WORDS });
    const {
      data: {
        listWords: { items },
      },
    } = result;
    return items;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getAllSentences = async () => {
  try {
    const result = await client.graphql({ query: GET_ALL_SENTENCES });
    const {
      data: {
        listSentences: { items },
      },
    } = result;
    return items;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const createSentence = async (input) => {
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
    return newSentenceData;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const createWord = async (input) => {
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
    return newWordData;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const updateWord = async (input) => {
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
    return updatedWordData;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const updateSentence = async (input) => {
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
    return updatedSentenceData;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const deleteWord = async (input) => {
  try {
    const parsedInput = initWordData(input);
    await client.graphql({
      query: DELETE_WORD,
      variables: {
        input: { id: parsedInput.id },
      },
    });
    return true;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

const deleteSentence = async (input) => {
  try {
    const parsedInput = initSentenceData(input);
    await client.graphql({
      query: DELETE_SENTENCE,
      variables: {
        input: { id: parsedInput.id },
      },
    });
    return true;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export {
  getAllWords,
  getAllSentences,
  createSentence,
  createWord,
  updateWord,
  updateSentence,
  deleteWord,
  deleteSentence,
};
