import React from 'react';

const ListItemContext = React.createContext({});
const ListItemContextProvider = ListItemContext.Provider;
const ListItemContextConsumer = ListItemContext.Consumer;

export { ListItemContext, ListItemContextProvider, ListItemContextConsumer };
