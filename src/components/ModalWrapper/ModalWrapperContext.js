import React from 'react';

const ModalWrapperContext = React.createContext({});
const ModalWrapperContextProvider = ModalWrapperContext.Provider;
const ModalWrapperContextConsumer = ModalWrapperContext.Consumer;

export { ModalWrapperContext, ModalWrapperContextProvider, ModalWrapperContextConsumer };
