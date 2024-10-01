import { useContext } from 'react';
import { ListItemContext } from './ListItemContext';

const useListItemContext = () => useContext(ListItemContext);

export default useListItemContext;
