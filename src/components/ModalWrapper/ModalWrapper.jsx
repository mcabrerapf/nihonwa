import React, { useState, useEffect, useRef } from 'react';
import './ModalWrapper.scss';
import { ModalWrapperContextProvider } from './ModalWrapperContext';

function ModalWrapper({ children, closeModal, closeOnBgClick: _closeOnBgClick = true }) {
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

  useEffect(() => {
    setCloseOnBgClick(_closeOnBgClick);
  }, [_closeOnBgClick]);

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
