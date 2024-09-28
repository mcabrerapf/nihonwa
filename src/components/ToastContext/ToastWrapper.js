import React, { useState } from 'react';
import './ToastWrapper.scss';
import { ToastContextProvider } from './ToastContext';
import Toast from './Toast';

function ToastWrapper({ children }) {
  const [toasts, setToasts] = useState([]);

  const createToast = ({ text, type }) => {
    const newToast = { id: Date.now(), text, type };
    const updatedToasts = [...toasts, newToast];
    setToasts(updatedToasts);
  };

  const handleToastClick = (idToRemove) => {
    const updatedToasts = toasts.filter(({ id }) => id !== idToRemove);
    setToasts(updatedToasts);
  };

  return (
    <div
      className="toaster"
    >
      <div className="toaster__toasts">
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

      <ToastContextProvider
        value={{
          createToast,
        }}
      >
        {children}
      </ToastContextProvider>

    </div>
  );
}

export default ToastWrapper;
