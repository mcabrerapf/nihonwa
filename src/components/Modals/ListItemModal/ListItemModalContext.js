import React from 'react';

const ListItemModalContext = React.createContext();
const ListItemModalContextProvider = ListItemModalContext.Provider;
const ListItemModalContextConsumer = ListItemModalContext.Consumer;

export { ListItemModalContext, ListItemModalContextProvider, ListItemModalContextConsumer };
