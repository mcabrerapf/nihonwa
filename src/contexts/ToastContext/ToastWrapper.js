import React, { useEffect, useState } from 'react';
import './ToastWrapper.scss';
import { ToastContextProvider } from './ToastContext';
import Toast from './Toast';

function ToastWrapper({ children }) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    function hideToast() {
      if (!toasts.length) return;
      const toastToPop = [...toasts];
      toastToPop.shift();
      setToasts(toastToPop);
    }
    const time = 3000;
    const timeout = setTimeout(hideToast, time);

    return () => clearTimeout(timeout);
  }, [toasts]);

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
    <ToastContextProvider
      value={{
        createToast,
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
