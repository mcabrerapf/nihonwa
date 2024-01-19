import React, { useEffect, useRef } from "react";
import "./ModalWrapper.css";

function ModalWrapper({ children, closeModal }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside({ target }) {
      const shouldHideModal =
        wrapperRef.current && !wrapperRef.current.contains(target);
      if (shouldHideModal) closeModal();
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, closeModal]);

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
        {children}
      </div>
    </div>
  );
}

export default ModalWrapper;
