import { useContext } from 'react';
import { ToastContext } from './ToastContext';

const useToastContext = () => useContext(ToastContext);

export default useToastContext;
