import React, { useState } from "react";
import "./SortModal.css";
import ModalWrapper from "../../ModalWrapper/ModalWrapper";

const SortModal = ({ closeModal, sort }) => {
  const [selectedSort, setSelectedSort] = useState(sort);
  const [selectedLan, selectedDir] = selectedSort;

  const updateSortLan = (lan) => {
    if (lan === selectedLan) return;
    setSelectedSort([lan, selectedDir]);
  };

  const updateSortDir = (dir) => {
    if (dir === selectedDir) return;
    setSelectedSort([selectedLan, dir]);
  };

  return (
    <ModalWrapper closeModal={() => closeModal(selectedSort)}>
      <div className="sort-modal">
        <div className="sort-modal-content">
          <div className="sort-options">
            <button
              className={`${selectedLan !== "en" ? "disabled" : ""}`}
              onClick={() => updateSortLan("en")}
            >
              Abc
            </button>
            <button
              className={`${selectedLan !== "jp" ? "disabled" : ""}`}
              onClick={() => updateSortLan("jp")}
            >
              日本
            </button>
          </div>
          <div className="sort-options">
            <button
              className={`${selectedDir !== "asc" ? "disabled" : ""}`}
              onClick={() => updateSortDir("asc")}
            >
              Asc
            </button>
            <button
              className={`${selectedDir !== "desc" ? "disabled" : ""}`}
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
