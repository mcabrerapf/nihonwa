import React, { useState, useEffect, useRef } from 'react';
import './ModalWrapper.scss';
import { ModalWrapperContextProvider } from './ModalWrapperContext';

function ModalWrapper({ children, closeModal }) {
  const backgroundRef = useRef(null);
  const wrapperRef = useRef(null);
  const [closeOnBgClick, setCloseOnBgClick] = useState(true);

  const scrollToBottom = () => {
    if (backgroundRef.current) backgroundRef.current.scrollTop = backgroundRef.current.scrollHeight;
    if (wrapperRef.current) wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
  };

  useEffect(() => {
    const handleResize = () => scrollToBottom();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  return (
    <div
      ref={backgroundRef}
      className="modal__bg"
      onTouchStart={stopPropagation}
      onTouchMove={stopPropagation}
      onTouchEnd={stopPropagation}
    >
      <div ref={wrapperRef} className="modal__bg__wrapper">
        <ModalWrapperContextProvider
          value={{
            setCloseOnBgClick,
            closeModal,
          }}
        >
          {children}
        </ModalWrapperContextProvider>
      </div>
    </div>
  );
}

export default ModalWrapper;
