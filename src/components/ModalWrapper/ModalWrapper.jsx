import React, { useState, useEffect, useRef } from 'react';
import './ModalWrapper.scss';
import { ModalWrapperContextProvider } from './ModalWrapperContext';

function ModalWrapper({ children, closeModal }) {
  const wrapperRef = useRef(null);
  const [closeOnBgClick, setCloseOnBgClick] = useState(true);
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };

  useEffect(() => {
    function handleClickOutside({ target }) {
      if (!closeOnBgClick) return;
      const shouldHideModal = wrapperRef.current && !wrapperRef.current.contains(target);
      if (shouldHideModal) closeModal();
    }
    const handleResize = () => scrollToBottom();

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [wrapperRef, closeModal, closeOnBgClick]);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="modal-bg"
      onTouchStart={stopPropagation}
      onTouchMove={stopPropagation}
      onTouchEnd={stopPropagation}
    >
      <div ref={wrapperRef} className="modal-wrapper">
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
