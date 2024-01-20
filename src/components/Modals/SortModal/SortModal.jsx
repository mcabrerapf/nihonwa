import React, { useState } from "react";
import "./SortModal.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";

const SortModal = ({ closeModal, sort }) => {
  const [selectedSort, setSelectedSort] = useState(sort);
  const [selectedSortLanguage, selectedSortDirection] = selectedSort;

  const updateSortLan = (language) => {
    if (language === selectedSortLanguage) return;
    setSelectedSort([language, selectedSortDirection]);
  };

  const updateSortDir = (direction) => {
    if (direction === selectedSortDirection) return;
    setSelectedSort([selectedSortLanguage, direction]);
  };

  return (
    <ModalWrapper closeModal={() => closeModal(selectedSort)}>
      <div className="sort-modal">
        <div className="sort-modal-content">
          <div className="sort-options">
            <button
              className={`${selectedSortLanguage !== "en" ? "disabled" : ""}`}
              onClick={() => updateSortLan("en")}
            >
              Abc
            </button>
            <button
              className={`${selectedSortLanguage !== "jp" ? "disabled" : ""}`}
              onClick={() => updateSortLan("jp")}
            >
              日本
            </button>
          </div>
          <div className="sort-options">
            <button
              className={`${selectedSortDirection !== "asc" ? "disabled" : ""}`}
              onClick={() => updateSortDir("asc")}
            >
              Asc
            </button>
            <button
              className={`${
                selectedSortDirection !== "desc" ? "disabled" : ""
              }`}
              onClick={() => updateSortDir("desc")}
            >
              Desc
            </button>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SortModal;
