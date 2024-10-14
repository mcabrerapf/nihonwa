import React, { useState, useEffect, useRef } from 'react';
import './ModalContextWrapper.scss';
import { ModalContextProvider } from './ModalContext';

function ModalContextWrapper({ children, showModal, closeModal }) {
  const backgroundRef = useRef(null);
  const wrapperRef = useRef(null);
  const [closeOnBgClick, setCloseOnBgClick] = useState(true);

  useEffect(() => {
    function handleClickOutside({ target }) {
      if (!closeOnBgClick) return;
      const shouldHideModal = wrapperRef.current && !wrapperRef.current.contains(target);
      if (shouldHideModal) closeModal();
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, closeModal, closeOnBgClick]);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  if (!showModal) return null;

  return (
    <div
      ref={backgroundRef}
      className="modal__bg"
      onTouchStart={stopPropagation}
      onTouchMove={stopPropagation}
      onTouchEnd={stopPropagation}
    >
      <div ref={wrapperRef} className="modal__bg__wrapper">
        <ModalContextProvider
          value={{
            setCloseOnBgClick,
            closeModal,
          }}
        >
          {children}
        </ModalContextProvider>
      </div>
    </div>
  );
}

export default ModalContextWrapper;
