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

const getAllWords = async ({ callback } = {}) => client.graphql({ query: GET_ALL_WORDS })
  .then((res) => {
    const {
      data: {
        listWords: { items },
      },
    } = res;
    const data = { data: items };
    return callback ? callback(data) : data;
  })
  .catch((err) => {
    console.log(err);
    return callback ? callback({ err }) : { err };
  });

const createWord = async ({ input, callback }) => {
  const parsedInput = initWordData(input);
  return client.graphql({
    query: CREATE_WORD,
    variables: {
      input: parsedInput,
    },
  })
    .then((res) => {
      const {
        data: { createWord: newWordData },
      } = res;
      const data = { data: newWordData };
      return callback ? callback(data) : data;
    })
    .catch((err) => {
      console.log(err);
      return callback ? callback({ err }) : { err };
    });
};

const updateWord = async ({ input, callback }) => {
  const parsedInput = initWordData(input);
  return client.graphql({
    query: UPDATE_WORD,
    variables: {
      input: parsedInput,
    },
  })
    .then((res) => {
      const {
        data: { updateWord: updatedWordData },
      } = res;
      const data = { data: updatedWordData };
      return callback ? callback(data) : data;
    })
    .catch((err) => {
      console.log(err);
      return callback ? callback({ err }) : { err };
    });
};

const deleteWord = async ({ input, callback }) => {
  const parsedInput = initWordData(input);
  return client.graphql({
    query: DELETE_WORD,
    variables: {
      input: { id: parsedInput.id },
    },
  })
    .then(() => {
      const data = { data: { id: parsedInput.id, jp: parsedInput.jp } };
      return callback ? callback(data) : data;
    })
    .catch((err) => {
      console.log(err);
      return callback ? callback({ err }) : { err };
    });
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
