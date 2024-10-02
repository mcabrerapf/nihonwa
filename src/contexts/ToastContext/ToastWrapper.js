import React, { useCallback, useState } from 'react';
import './ToastWrapper.scss';
import { ToastContextProvider } from './ToastContext';
import Toast from './Toast';

function ToastWrapper({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(({ text, type }) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, text, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 3000);
  }, []);

  const handleToastClick = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContextProvider
      value={{
        addToast,
      }}
    >
      <div
        className="toast-wrapper"
      >
        {toasts.map(({ id, text, type }) => (
          <Toast
            key={id}
            id={id}
            text={text}
            type={type}
            handleToastClick={handleToastClick}
          />
        ))}
      </div>

      {children}
    </ToastContextProvider>

  );
}

export default ToastWrapper;
