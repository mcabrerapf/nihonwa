import React from 'react';

const DictionaryContext = React.createContext({});
const DictionaryContextProvider = DictionaryContext.Provider;
const DictionaryContextConsumer = DictionaryContext.Consumer;

export { DictionaryContext, DictionaryContextProvider, DictionaryContextConsumer };
